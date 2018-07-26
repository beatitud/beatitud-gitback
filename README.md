Rules:

- Folder names are kind of indexes
- First level : collections names (saint, bible, church, event, ...)
- Files are items
- File extensions are pointing to specific data models, defined in a global schema
- Local paths should be as far as possible our future API routing paths :
    for instance :
    http://api.beatitud.io/saint/:saintId/:languageId/:locationId/life
    or :
    http://api.beatitud.io/bible/:bookId/:chapterId/:verseId/:languageId/:locationId/versetxt
    or :
    http://api.beatitud.io/daily/:day/readings
