/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

import {Content} from "./content/content.js";

export interface ProfileField {
    /**
     * Caption / label for this field.
     */
    label: Content;

    /**
     * Body / value for this field.
     */
    value: Content;

    /**
     * Whether this field was verified by the server.
     */
    verified?: boolean;

    /**
     * Timestamp when the field was last verified.
     */
    verifiedAt?: Date;
}
