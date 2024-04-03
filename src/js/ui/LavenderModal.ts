/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/. 
 */

import {LavenderPanel} from "./LavenderPanel.js";

export class LavenderModal<T extends HTMLDialogElement = HTMLDialogElement> extends LavenderPanel<T> {

    get open() {
        return this.element.open;
    }

    show() {
        this.element.show();
    }

    showModal() {
        this.element.showModal();
    }

    close(returnValue?: string) {
        this.element.close(returnValue);
    }
}
