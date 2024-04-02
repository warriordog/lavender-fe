/*
 * Copyright (C) 2024 Hazelnoot.
 * This file is a component of Lavender-FE, which is licensed under the terms of the GNU Affero General Public License.
 * A copy of the AGPL is available in the "LICENSE.md" file or online at https://www.gnu.org/licenses/.
 */

export interface Host {
    /**
     * Type of instance that was detected at this host.
     * Will be null if no instance was found.
     */
    instanceType: string | null;

    /**
     * True if the host was successfully contacted, false otherwise.
     */
    alive: boolean;

    /**
     * Hostname (domain name) of the host.
     */
    hostname: string;

    /**
     * Timestamp when this information was last queried.
     */
    lastChecked: Date;
}
