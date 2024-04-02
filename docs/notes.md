# Miscellaneous Notes

## Good plans

* Notifications should be mutable, including order. we want to support non-consecutive merging, like Misskey but better.
* Service layer will need to issue events, which means we need to connect / disconnect.
  * Group by "owner", which can be the component instance?
  * Maybe introduce some Vue middleware to unbind events (will prevent leaks).

* Arbitrary object types, not just note
  * If at all possible, lets do it through a single "universal" content model (see domain model).

* Support for arbitrary backends, starting with Misskey
    * Must use string IDs for maximum compat

* Content-agnostic domain model
  * Follow a compiler architecture 
  * (1) Frontend layer - backend-specific. Parse MFM / markdown / HTML / etc into IL.
  * (2) Formatted content IL (text & media support)
  * (3) Backend layer - UI-specific (but only VueJS included by default). Render IL for display.


## WIP thoughts

* Add local integer key for objects?
* Allow backends to inherit from each other (like forks)?
* Should content model have a key? If not, then Vue cannot cache and will force re-render on each update.


## Abandoned ideas

* Smart entities?
  * Pro: Would allow us to take advantage of backends that return thick objects.
  * Con: Would need to implement a backing class for each object type, per backend.
  * NO - not worth it. Use caches in the repo layer instead.
