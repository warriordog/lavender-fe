/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

import {Content} from "./content.js";

// TODO move to content.ts

export type SpecialContent = symbol;

export const ContentBreak = Symbol('Content.Break');

export function isContentBreak(content: Content): content is SpecialContent {
    return content === ContentBreak;
}
