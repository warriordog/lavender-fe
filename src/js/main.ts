/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

// Mount the app
import {MainModule} from "./mainModule.js";

async function onready(): Promise<void> {
    return new Promise(resolve => {
        if (document.readyState === 'complete')
            resolve();
        else {
            window.addEventListener('load', () => resolve());
        }
    });
}

async function mountApp(): Promise<void> {
    const element = document.getElementById('lavender-app');
    if (!element) {
        throw new Error("Can't find mount point for id 'lavender-app'");
    }

    // TODO implement the actual logic

    // Initialize service container
    const module = new MainModule();
    await module.initialize();

    // Restore state from browser storage (slow, async)
    // Create and mount main

    // Activate the page
    document.body.toggleAttribute('lavender-loaded', true);
}

function mountError(error: unknown): void {
    console.error('Lavender failed to start! Exception caught: ', error);

    const root = document.getElementById('lavender-loading-text') ?? document.body;
    root.textContent = `Lavender failed to start! Exception caught: ${error}`;
}

onready()
    .then(() => mountApp())
    .catch((e: unknown) => mountError(e))
;
