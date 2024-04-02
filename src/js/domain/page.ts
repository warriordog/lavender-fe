/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

export type Page<T> = readonly T[] & {
    /**
     * Remote ID of this page.
     * Should be treated as opaque.
     * @see {Page}
     */
    id?: string;

    /**
     * Remote ID of the page immediately preceding this one.
     * Should be treated as opaque.
     * @see {Page}
     */
    lastPageId?: string;

    /**
     * Remote ID of the page immediately following this one.
     * Should be treated as opaque.
     * @see {Page}
     */
    nextPageId?: string;
}
