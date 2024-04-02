/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

import {Backend} from "../backends/backend.js";
import {Host} from "../domain/host.js";
import {ISessionService} from "./SessionService.js";
import {IHostInfoService} from "./HostInfoService.js";
import {PlaceholderBackend, placeholderBackendType} from "../backends/placeholder/placeholderBackend.js";

/**
 * Manages connected backends
 */
export interface IBackendService {
    /**
     * Live, readonly map of connected backends, keyed by hostname (domain name).
     */
    readonly backends: ReadonlyMap<string, Backend>;

    /**
     * Connects to the backend at a given host.
     * If the backend is already connected, then the existing instance is returned.
     * @param host hostname to connect to.
     */
    connect(host: Host | string): Promise<Backend>;

    /**
     * Disconnects an existing backend.
     * No-op if the backend is not connect.
     * @param backend Instance or hostname to disconnect.
     */
    disconnect(backend: Backend | string): Promise<void>;
}


export class BackendService implements IBackendService {
    private readonly _backends = new Map<string, Backend>();
    get backends() {
        return this._backends;
    }

    public constructor(
        private readonly _sessionService: ISessionService,
        private readonly _hostInfoService: IHostInfoService
    ) {}

    async connect(host: Host | string): Promise<Backend> {
        // Try to re-use a cached instance first
        const hostname = typeof(host) === 'string'
            ? host
            : host.hostname;
        let backend = this._backends.get(hostname);

        // If not found, then we need to construct one
        if (!backend) {
            if (typeof (host) === 'string') {
                host = await this._hostInfoService.getHostInfo(host);
            }

            backend = this._createBackend(host);
            this._backends.set(host.hostname, backend);
        }

        return backend;
    }

    async disconnect(backend: Backend | string): Promise<void> {
        // Resolve to an instance
        if (typeof (backend) === 'string') {
            const resolved = this._backends.get(backend);
            if (!resolved) {
                // Nothing to do if we aren't connected
                return;
            }
            backend = resolved;
        }

        // Close all sessions for the backend
        const existingSessions = this._sessionService.getSessionsForBackend(backend);
        for (const session of existingSessions) {
            await this._sessionService.disconnect(session);
        }

        // Delete the saved session
        this._backends.delete(backend.host.hostname);
    }

    private _createBackend(host: Host): Backend {
        if (!host.alive)
            throw new Error('Connection error: failed to connect to remote host');

        switch (host.instanceType) {
            case placeholderBackendType:
                return new PlaceholderBackend(host);
            case null:
                throw new Error('Connection error: could not detect any supported fedi instance');
            default:
                throw new Error(`Connection error: unsupported instance type ${host.instanceType}`)
        }
    }
}
