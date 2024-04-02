/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

// Important references:
// https://typescript-eslint.io/getting-started/
// https://typescript-eslint.io/users/configs/
// https://eslint.org/docs/latest/use/getting-started
// https://eslint.org/blog/2022/08/new-config-system-part-2/
// https://eslint.org/docs/latest/use/configure/configuration-files-new
// https://typescript-eslint.io/getting-started/typed-linting
// https://eslint.org/docs/latest/use/configure/ignore

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        files: ["src/js/**/*.ts"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.es2020,
                ...globals.browser
            },
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            }
        },
        rules: {
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-confusing-void-expression': ['error', {
                ignoreArrowShorthand: true
            }],
            '@typescript-eslint/restrict-template-expressions': 'off'
        }
    }
);
