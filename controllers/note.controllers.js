const Notes = require("../modles/Notes")

const addNote = async (req, res) => {
    await Notes.create(req.body)
    res.json({ message: "note create success" })
}
const getNote = async (req, res) => {
    const result = await Notes.find()
    res.json({ message: "note fetch success", result })
}
const updateNote = async (req, res) => {
    const { nid } = req.params // he id sathi lihle
    await Notes.findByIdAndUpdate(nid, req.body)
    res.json({ message: "note update success" })
}
const deleteNote = async (req, res) => {
    const { nid } = req.params // he id sathi lihle
    await Notes.findByIdAndDelete(nid)
    res.json({ message: "note delete success" })
}


module.exports = { addNote, getNote, updateNote, deleteNote }
