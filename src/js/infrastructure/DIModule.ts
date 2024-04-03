/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/. 
 */

// TODO implement higher-level "container" concept to dispatch initialize to all modules

export abstract class DIModule {
    initialize(): Promise<void> {
        return Promise.resolve();
    }
}
