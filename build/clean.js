/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

import {mkdir, rm} from 'fs/promises';

// Run this from the project root.

// Delete and re-create dist
await rm('dist', {
    recursive: true,
    force: true,
});
await mkdir('dist');
