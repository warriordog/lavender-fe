/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

// Mount the app
async function onready(): Promise<void> {
    return new Promise(resolve => {
        if (document.readyState === 'complete')
            resolve();
        else {
            document.addEventListener('load', () => resolve());
        }
    });
}

async function mountApp(selector: string): Promise<void> {
    const element = document.querySelector<HTMLElement>(selector);
    if (!element) {
        throw new Error(`Can't find mount point for "${selector}"`);
    }

    // TODO implement
    element.textContent = 'Hello, world!';

    // Initialize service container (async)
    // Restore state from browser storage (slow, async)
    // Create and mount main
}

function mountError(selector: string, error: unknown): void {
    console.error('Lavender failed to start! Exception caught: ', error);

    const root = document.querySelector(selector) ?? document.body;
    root.textContent = `Lavender failed to start! Exception caught: ${error}`;
}

const mountPoint = '#lavender-app';
onready()
    .then(() => mountApp(mountPoint))
    .catch((e: unknown) => mountError(mountPoint, e))
;
