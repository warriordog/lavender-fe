/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/. 
 */

import {UIModule} from "./ui/uiModule.js";
import {DIModule} from "./infrastructure/DIModule.js";

export class MainModule extends DIModule {
    public readonly uiModule: UIModule;

    constructor() {
        super();
        this.uiModule = new UIModule();
    }
}
