# express-notes

    -html routes-

    GET /notes return notes.html

    GET * return index.html

    -API routes-

    GET /api/notes reads db.json and returns all saved notes

    POST /api/notes should recive a new note, add it to the db.json then return new note to client

    DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete, meaning each note will need a unique id.
