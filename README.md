# fugr-ru-test

## Description

Project is Test Assignment from
[fugr-ru/frontend-javascript-test](https://github.com/fugr-ru/frontend-javascript-test). 
Done:
- General Setup for work.
- Structure of Project.
- Some work on fetch.
TODO:
- Add jest for testing.
- Cache.
- React compoents with styled-components.
- From time to time Server not responding need checks for not responding.
- In case of Error must show Message to user not actual response.
- Sorting Algorithms.
- Promises or Async?

## Problems

Caches are confusing. For some reason API has not worked well at all.
Setup for work took ages. I mean it not wise to develop on Lenovo Tab,
but still...
Feels like Problems with Configs are going to show some time later.
Where to keep Data? It's not wise to download all the time and work
from there. Latency, Traffic. I would rather keep all in caches, but can't
get it to work. The Solution is to make component's data work as cache.
Get all what is required for work stealthly with async functions. Sort it,
add to top component's data and then on all requests serve it from there.
This way it still be downloaded every Session, but once.
