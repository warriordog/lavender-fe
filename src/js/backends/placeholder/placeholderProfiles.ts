/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

import {Profile} from "../../domain/profile.js";
import {ContentBreak} from "../../domain/content/specialContent.js";

export const placeholderProfiles: Record<string, Profile | undefined> = {
    // 1: home.example.com
    '1': {
        id: '1',
        instanceId: '1',
        username: 'admin',
        displayName: 'Fedihome Admin',
        createdAt: new Date('2022-01-15'),
        bio: [
            { type: 'style', bold: true, contents: 'Official Fedihome Admin Account' },
            ContentBreak,
            'Contact this account for all official matters.'
        ]
    },
    '2': {
        id: '2',
        instanceId: '1',
        username: 'steve',
        displayName: 'Steve Fediman',
        createdAt: new Date('2022-06-01'),
        profilePicUrl: 'https://home.example.com/media/000.png',
        bio: 'My name is Steve Fediman and I came here from mastodon.social because they said I was too much of a twitter user',
        fields: [
            { label: 'Twitter (main)', value: 'https://twitter.com/steve_twitterman/', verified: true },
            { label: 'Twitter (alt)', value: 'https://twitter.com/steve2/', verified: true },
            { label: 'Twitter (alt)', value: 'https://twitter.com/steve2_twitterman/', verified: true }
        ]
    },
    '3': {
        id: '3',
        instanceId: '1',
        username: 'luna',
        displayName: 'Luna!',
        createdAt: new Date('2022-07-10'),
        profilePicUrl: 'https://home.example.com/media/050.png',
        bio: 'TBD'
    },

    // 2: another.fedi.server.example.com
    '10': {
        id: '10',
        instanceId: '2',
        username: 'admin',
        displayName: 'Yet Another Fedi Admin',
        createdAt: new Date('2024-01-01'),
        bio: 'New year, new instance!'
    },
    '11': {
        id: '11',
        instanceId: '2',
        username: 'joe',
        displayName: 'Average Joe',
        createdAt: new Date('2024-01-05'),
        bio: 'Just an ordinary guy.'
    },

    // 3: one.more.fedi.example.com
    // (intentionally left empty)
};

export const placeholderProfilesList = Object.values(placeholderProfiles) as Profile[];
