/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

import {Session} from "../domain/session.js";
import {Backend} from "../backends/backend.js";

/**
 * Manages authenticated remote sessions
 */
export interface ISessionService {

    /**
     * Live, readonly map of all connected sessions, keyed by hostname (domain) and username.
     */
    readonly sessions: ReadonlyMap<string, ReadonlyMap<string, Session>>;

    /**
     * Lists all the sessions for a given backend.
     * @param backend Backend instance
     */
    getSessionsForBackend(backend: Backend): Session[];

    /**
     * Opens a session for a given username and backend.
     * @param backend Backend to connect to
     * @param username Username of a profile on the backend
     */
    connect(backend: Backend, username: string): Promise<Session>;

    /**
     * Disconnects an existing session
     * @param session Session to close
     */
    disconnect(session: Session): Promise<void>;
}


export class SessionService implements ISessionService {
    private readonly _sessions = new Map<string, Map<string, Session>>();

    get sessions() {
        return this._sessions;
    }

    getSessionsForBackend(backend: Backend): Session[] {
        const sessions = this._sessions.get(backend.host.hostname)?.values()
        return sessions
            ? Array.from(sessions)
            : [];
    }

    connect(backend: Backend, username: string): Promise<Session> {
        throw new Error("Method not implemented.");
    }

    disconnect(session: Session): Promise<void> {
        throw new Error("Method not implemented.");
    }

}
