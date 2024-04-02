/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

import {Instance} from "../../domain/instance.js";
import {placeholderHosts} from "./placeholderHosts.js";

export const placeholderInstances: Record<string, Instance | undefined> = {
    '1': {
        id: '1',
        host: placeholderHosts['home.example.com']!,
        name: 'Fedihome',
        description: 'A Home on Fedi',
        adminId: '1'
    },
    '2': {
        id: '2',
        host: placeholderHosts['another.fedi.server.example.com']!,
        name: 'another.fedi',
        description: 'yet another fedi server',
        adminId: '10'
    },
    '3': {
        id: '3',
        host: placeholderHosts['one.more.fedi.example.com']!,
        name: 'one more time!'
    }
};
