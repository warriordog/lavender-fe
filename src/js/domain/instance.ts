/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

import type {Content} from "./content/content.js";
import type {Host} from "./host.js";

export interface Instance {
    /**
     * Remote ID of the instance.
     * Should be treated as opaque.
     * Note: not all backends have ID, use host in that case
     * @see {Instance}
     */
    id: string;

    /**
     * Remote ID of the admin user.
     * Should be treated as opaque.
     * @see {Profile}
     */
    adminId?: string;

    /**
     * Instance host metadata.
     */
    host: Host;

    /**
     * Display name of the instance.
     * TODO should this be Content?
     */
    name: string;

    /**
     * Human-readable instance description.
     */
    description?: Content;
}
