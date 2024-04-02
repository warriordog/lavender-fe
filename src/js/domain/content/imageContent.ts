/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

import {Content} from "./content.js";

export interface ImageContent {
    type: 'image';
    url: string;
    altText?: string;
}

export function isImageContent(content: Content): content is ImageContent {
    return typeof(content) === 'object' && 'type' in content && content.type === 'image';
}
