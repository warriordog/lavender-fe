/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

import { readdir, cp } from 'fs/promises';
import { join } from 'path';

// Run this from the project root.
// Important: please run TypeScript before calling this!

// Copy all non-compiled source files
for (const file of await readdir('src')) {
    // Skip the "js" directory, as it is compiled by TSC
    if (file === 'js')
        continue;

    // Copy everything else
    const from = join('src', file);
    const to = join('dist', file);
    await cp(from, to, {
        force: true,
        recursive: true
    });
}

// TODO generate preload index
// TODO insert preload into HTML
