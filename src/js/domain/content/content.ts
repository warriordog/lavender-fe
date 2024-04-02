/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

import {ContentGroup} from "./contentGroup.js";
import {TextContent} from "./textContent.js";
import {StyleContent} from "./styleContent.js";
import {ImageContent} from "./imageContent.js";
import {MentionContent} from "./mentionContent.js";
import {LinkContent} from "./linkContent.js";
import {SpecialContent} from "./specialContent.js";

export type Content = ContentGroup | TextContent | StyleContent | ImageContent | MentionContent | LinkContent | SpecialContent;

// type ContentGroup = [ style: GroupStyle, ...content: Content[] ];
//
// interface GroupStyle {
//     bold?: boolean;
//     italic?: boolean;
//     underline?: boolean;
//     strikethrough?: boolean;
// }

/*

 content = [ 'this is text ', { type: 'style', italics: true, children: [ 'in italics' ] }, '!' ]
 Array (group)
    String (text)
    Object (style)
        Array (group)
            String (text)
    String (text)

 */
