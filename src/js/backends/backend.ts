/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

import {Host} from "../domain/host.js";
import {Instance} from "../domain/instance.js";
import {Profile} from "../domain/profile.js";
import {Page} from "../domain/page.js";
import {Post} from "../domain/post.js";
import {Session} from "../domain/session.js";

/**
 * Universal interface for all backend implementations
 */
export interface Backend {
    /**
     * Host metadata of the backend.
     */
    readonly host: Host;

    getLocalInstance(): Promise<Instance>;

    getInstance(id: string): Promise<Instance | null>;

    getProfile(id: string): Promise<Profile | null>;
    getProfilesByUsername(username: string): Promise<Page<Profile>>;
    getProfileByLocalUsername(username: string): Promise<Profile | null>;
    getProfilePosts(id: string): Promise<Page<Post>>

    getPost(id: string): Promise<Post | null>;
    getPostReplies(parentId: string): Promise<Page<Post>>;

    /**
     * Authenticates to the backend with the given username.
     * @param username Username of the profile to connect.
     */
    login(username: string): Promise<Session>;
}
