/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

import {Host} from "../../domain/host.js";

export const placeholderHosts: Record<string, Host | undefined> = {
    'home.example.com': {
        instanceType: 'placeholder',
        alive: true,
        hostname: 'home.example.com',
        lastChecked: new Date()
    },
    'another.fedi.server.example.com': {
        instanceType: 'placeholder',
        alive: true,
        hostname: 'another.fedi.server.example.com',
        lastChecked: new Date()
    },
    'one.more.fedi.example.com': {
        instanceType: 'placeholder',
        alive: true,
        hostname: 'one.more.fedi.example.com',
        lastChecked: new Date()
    }
};
