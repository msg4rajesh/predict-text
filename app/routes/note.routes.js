module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/addText', notes.create);

    //BrainJS thing
    app.get('/trainModel', notes.trainModel);
    app.get('/predict/:text', notes.predict);

}