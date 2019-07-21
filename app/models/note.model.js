const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    text: String,
    time: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);