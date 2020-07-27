const notesCtrl = {};

//llamando al modelo de notas
const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};

notesCtrl.createNote = async (req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author
    });
    await newNote.save();
    res.json({message: 'nota guardada'})
};

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
};

notesCtrl.updateNote = async (req, res) => {
    const { title, content, author } = req.body;
    await Note.findOneAndUpdate(req.params.id, {
        title,
        content,
        author
    });
    res.json({message: 'nota actualizada'})
};

notesCtrl.deleteNote = async (req, res) => {
    await Note.findOneAndDelete(req.params.id);
    res.json({message: 'nota eliminada'});
};

module.exports = notesCtrl;