# Beatitud Gitback

Totally inspired by GitBack project (https://www.npmjs.com/package/gitback), this node.js server is dealing with a git DB and exposing an API.

Here is db archi:
- Folder names at a first level are collection names (saint, bible, church, event, ...)
- Folder names at a second level are file indexes
- File inside each folder is item content

Possible API routes would be:
- http://api.beatitud.io/saint/:saintId/:languageId/:locationId/life
- http://api.beatitud.io/bible/:bookId/:chapterId/:verseId/:languageId/:locationId/verse
- http://api.beatitud.io/daily/:day/readings
