/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

import {Post} from "../../domain/post.js";

export const placeholderPosts: Record<string, Post | undefined> = {
    // 3: luna@home.example.com
    '1': {
        id: '1',
        instanceId: '1',
        authorId: '3',
        createdAt: new Date('2022-06-01'),
        content: 'Hello, world!'
    },
    '2': {
        id: '2',
        instanceId: '1',
        authorId: '3',
        parentId: '1',
        createdAt: new Date('2022-06-01'),
        content: 'Just trying out this new "fediverse" thing'
    }
};
export const placeholderPostList = Object.values(placeholderPosts) as Post[];
