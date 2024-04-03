/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/. 
 */

import {HeaderPanel} from "./panels/headerPanel..js";
import {FrontendSettingsModal} from "./panels/modals/frontendSettingsModal.js";
import {DIModule} from "../infrastructure/DIModule.js";

export class UIModule extends DIModule {
    public readonly frontendSettingsModal: FrontendSettingsModal;
    public readonly headerPanel: HeaderPanel;

    // TODO depend on core module
    constructor() {
        super();
        this.frontendSettingsModal = new FrontendSettingsModal();
        this.headerPanel = new HeaderPanel(this.frontendSettingsModal);
    }
}
