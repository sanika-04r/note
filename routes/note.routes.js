const { getNote, addNote, updateNote, deleteNote } = require("../controllers/note.controllers")

const router = require("express").Router()

router
    .get("/", getNote)
    .post("/", addNote)
    .put("/:nid", updateNote)
    .delete("/:nid", deleteNote)


module.exports = router