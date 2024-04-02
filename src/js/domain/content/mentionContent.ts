/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

import {Content} from "./content.js";

export interface MentionContent {
    type: 'mention'
    userId: string;
}

export function isMentionContent(content: Content): content is MentionContent {
    return typeof(content) === 'object' && 'type' in content && content.type === 'mention';
}
