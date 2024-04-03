/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/. 
 */

import {LavenderElement} from "./LavenderElement.js";

export class LavenderPanel<T extends HTMLElement = HTMLElement> extends LavenderElement<T> {
    constructor(selector: string, doc: Document = document) {
        const element = doc.querySelector<T>(selector)
        if (!element) {
            throw new Error(`Could not find panel with selector "${selector}"`);
        }

        super(element);
    }
}

// TODO rework this entire panel system.
//  Classes are the wrong abstraction for something that is inherently static.
//  Switch to "mount" methods?
//  Web Components?
