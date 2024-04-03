/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/. 
 */

export class LavenderElement<TElement extends HTMLElement> {
    constructor(
        protected readonly element: TElement
    ) {}

    public requireElement<T extends HTMLElement>(selector: string): T  {
        const elem = this.findElement<T>(selector);
        if (!elem) {
            throw new Error(`Can't find child with selector "${selector}"`);
        }
        return elem;
    }

    public findElement<T extends HTMLElement>(selector: string): T | null {
        return this.element.querySelector(selector);
    }
}

// // eslint-disable-next-line @typescript-eslint/no-extraneous-class
// export class LavenderElementImpl {
//     constructor(element: HTMLElement) {
//         return element;
//     }
// }
//
// // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-assignment
// export const LavenderElement: new <T extends HTMLElement>(element: T) => T = LavenderElementImpl as any;
