import {Backend} from "../backend.js";
import {Host} from "../../domain/host.js";
import {Instance} from "../../domain/instance.js";
import {placeholderInstances} from "./placeholderInstances.js";
import {Profile} from "../../domain/profile.js";
import {placeholderProfiles, placeholderProfilesList} from "./placeholderProfiles.js";
import {Page} from "../../domain/page.js";
import {Post} from "../../domain/post.js";
import {placeholderPostList, placeholderPosts} from "./placeholderPosts.js";
/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

import {Session} from "../../domain/session.js";

export const placeholderBackendType = 'placeholder';

export class PlaceholderBackend implements Backend {
    constructor(
        public readonly host: Host
    ) {}

    async getLocalInstance(): Promise<Instance> {
        const local = await this.getInstance('1');
        if (local == null)
            throw new Error('Local instance could not be loaded');
        return local;
    }

    getInstance(id: string): Promise<Instance | null> {
        const instance = placeholderInstances[id] ?? null;
        return Promise.resolve(instance);
    }

    getProfile(id: string): Promise<Profile | null> {
        const profile = placeholderProfiles[id] ?? null;
        return Promise.resolve(profile);
    }

    async getProfileByLocalUsername(username: string): Promise<Profile | null> {
        const localInstance = await this.getLocalInstance();
        return placeholderProfilesList.find(p=> p.instanceId === localInstance.id && p.username == username) ?? null;
    }

    getProfilesByUsername(username: string): Promise<Page<Profile>> {
        const profiles = placeholderProfilesList.filter(p=> p.username == username);
        return Promise.resolve(profiles);
    }

    getProfilePosts(id: string): Promise<Page<Post>> {
        const posts = placeholderPostList.filter(p=> p.authorId === id);
        return Promise.resolve(posts);
    }

    getPost(id: string): Promise<Post | null> {
        const post = placeholderPosts[id] ?? null;
        return Promise.resolve(post);
    }

    getPostReplies(parentId: string): Promise<Page<Post>> {
        const replies = placeholderPostList.filter(p => p.parentId === parentId);
        return Promise.resolve(replies);
    }

    async login(username: string): Promise<Session> {
        const profile = await this.getProfileByLocalUsername(username);
        if (!profile)
            throw new Error('Authentication failed: unknown username');

        return {
            backend: this,
            instance: await this.getLocalInstance(),
            profileId: profile.id,
            username
        }
    }
}
