/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

import type {Host} from "../domain/host.js";

/**
 * Queries metadata about remote hosts
 */
export interface IHostInfoService {
    /**
     * Queries metadata about a host.
     * May return cached data if fresh enough.
     * @param hostname hostname to access
     * @param force If set to true, ignore cache and forcibly refresh the data.
     */
    getHostInfo(hostname: string, force?: boolean): Promise<Host>;

    /**
     * Returns previously-queried metadata about a host.
     * If no data has been queried, then returns null.
     * @param hostname
     */
    getCachedHostInfo(hostname: string): Promise<Host | null>;
}

export class HostInfoService implements IHostInfoService {

    private readonly _hostInfoCache = new Map<string, Host>();

    async getHostInfo(hostname: string, force?: boolean): Promise<Host> {
        // This is all just fancy for "getCachedHostInfo unless forced"
        let host = force === true
            ? null
            : await this.getCachedHostInfo(hostname);

        if (!host) {
            host = await this._queryHostInfo(hostname);
            this._hostInfoCache.set(hostname, host);
        }
        return host;
    }

    getCachedHostInfo(hostname: string): Promise<Host | null> {
        const host = this._hostInfoCache.get(hostname) ?? null;
        return Promise.resolve(host);
    }

    // eslint-disable-next-line @typescript-eslint/require-await,@typescript-eslint/no-unused-vars
    private async _queryHostInfo(hostname: string): Promise<Host> {
        throw new Error('Not implemented');
    }
}
