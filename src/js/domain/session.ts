/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

import {Backend} from "../backends/backend.js";
import {Instance} from "./instance.js";

export interface Session {
    /**
     * Backend that is hosting this session.
     */
    readonly backend: Backend;

    /**
     * Instance details of the backend.
     */
    readonly instance: Instance;

    /**
     * Remote ID of the local user's profile.
     * Should be treated as opaque.
     * @see {Profile}
     */
    readonly profileId: string;

    /**
     * Username of the local user.
     * Can be used as an instance-unique identifier.
     */
    readonly username: string;
}
