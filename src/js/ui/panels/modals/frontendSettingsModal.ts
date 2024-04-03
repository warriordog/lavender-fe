/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/. 
 */

import {LavenderModal} from "../../LavenderModal.js";

export const frontendSettingsSelector = '#lavender-fe-settings';

export class FrontendSettingsModal extends LavenderModal {
    private readonly animateBackgroundCheckbox = this.requireElement<HTMLInputElement>('#lav-fe-settings-bg-anim-enabled');

    constructor(doc: Document = document) {
        super(frontendSettingsSelector, doc);

        this.animateBackgroundCheckbox.addEventListener('change', () => {
            document.body.toggleAttribute('lavender-bg-animated', this.animateBackgroundCheckbox.checked);
        });
    }
}
