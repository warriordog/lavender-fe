/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/. 
 */

import {LavenderPanel} from "../LavenderPanel.js";
import {FrontendSettingsModal} from "./modals/frontendSettingsModal.js";

export const headerPanelSelector = '#lavender-header';
export class HeaderPanel extends LavenderPanel {
    private readonly toggleFESettingsButton = this.requireElement<HTMLButtonElement>('#lav-header-toggle-fe-settings');

    constructor(frontendSettingsModal: FrontendSettingsModal, doc: Document = document) {
        super(headerPanelSelector, doc);

        this.toggleFESettingsButton.addEventListener('click', () => {
            if (frontendSettingsModal.open) {
                frontendSettingsModal.close();
            } else {
                frontendSettingsModal.show()
            }
        });
    }
}
