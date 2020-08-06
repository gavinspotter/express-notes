var express = require("express");

var PORT = process.env.PORT || 8000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/notes", () => {});

app.get("/", () => {});

app.get("/api/notes", () => {});

app.post("/api/notes", () => {});

app.delete("api/notes/:id", () => {});

app.listen(PORT, function () {
  console.log("Listening on port:%s", PORT);
});
