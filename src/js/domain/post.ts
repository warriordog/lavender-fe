/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

import {Content} from "./content/content.js";

export interface Post {
    /**
     * Remote ID of the post.
     * Should be treated as opaque.
     * @see {Post}
     */
    id: string;

    /**
     * Remote ID of this post's instance.
     * Should be treated as opaque.
     * @see {Instance}
     */
    instanceId: string;

    /**
     * Remote ID of the post author.
     * Should be treated as opaque.
     * @see {Profile}
     */
    authorId: string;

    /**
     * Remote ID of the parent post.
     * Should be treated as opaque.
     * @see {Post}
     */
    parentId?: string;

    /**
     * Timestamp when the post was created.
     */
    createdAt?: Date;

    /**
     * Timestamp when the post was last updated.
     */
    updatedAt?: Date;

    /**
     * Timestamp when the post was deleted.
     */
    deletedAt?: Date;

    /**
     * Subject line, separate from content warning.
     */
    subject?: Content;

    /**
     * Content warning for the post.
     */
    warning?: Content;

    /**
     * Content of the post.
     */
    content?: Content;
}
