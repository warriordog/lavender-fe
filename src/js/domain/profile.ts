/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

import {Content} from "./content/content.js";
import {ProfileField} from "./profileField.js";

export interface Profile {
    /**
     * Remote ID of this profile.
     * Should be treated as opaque.
     * @see {Profile}
     */
    id: string;

    /**
     * Remote ID of this profile's instance.
     * Should be treated as opaque.
     * @see {Instance}
     */
    instanceId: string;

    /**
     * Username of the profile.
     * Can be used as an instance-unique identifier.
     */
    username: string;

    /**
     * Human-readable display name.
     */
    displayName: Content;

    /**
     * Timestamp when the profile was created.
     */
    createdAt?: Date;

    /**
     * Timestamp when the profile was last updated.
     */
    updatedAt?: Date;

    /**
     * Timestamp when the profile was deleted.
     */
    deletedAt?: Date;

    /**
     * URL to the profile's profile picture.
     */
    profilePicUrl?: string;

    /**
     * URL to the profile's banner / header picture.
     */
    bannerPicUrl?: string;

    /**
     * URL to the profile's background picture.
     */
    backgroundPicUrl?: string;

    /**
     * Profile's bio text.
     */
    bio?: Content;

    /**
     * Profile's links / additional fields.
     */
    fields?: ProfileField[];
}
