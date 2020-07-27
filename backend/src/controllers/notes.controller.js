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

notesCtrl.getNote = (req, res) => res.json({message: 'asdasdasdasdasd'});

notesCtrl.updateNote = (req, res) => res.json({message: 'nota actualizada'});

notesCtrl.deleteNote = (req, res) => res.json({message: 'nota eliminada'});

module.exports = notesCtrl;