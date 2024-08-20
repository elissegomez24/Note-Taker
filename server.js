const express = require("express");
const fs = require("fs");
const path = require("path");
const uuid = require("uuid"); // npm install uuid

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Middleware for parsing request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTML Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "notes.html"));
});

// API Routes
app.get("/api/notes", (req, res) => {
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Failed to read notes." });
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.post("/api/notes", (req, res) => {
    const newNote = { ...req.body, id: uuid.v4() };
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Failed to read notes." });
            return;
        }
        const notes = JSON.parse(data);
        notes.push(newNote);
        fs.writeFile("db/db.json", JSON.stringify(notes, null, 2), (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: "Failed to save note." });
                return;
            }
            res.json(newNote);
        });
    });
});

app.delete("/api/notes/:id", (req, res) => {
    const noteId = req.params.id;
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Failed to read notes." });
            return;
        }
        let notes = JSON.parse(data);
        notes = notes.filter((note) => note.id !== noteId);
        fs.writeFile("db/db.json", JSON.stringify(notes, null, 2), (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: "Failed to delete note." });
                return;
            }
            res.status(204).end();
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
