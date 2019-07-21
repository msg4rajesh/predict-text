const Note = require('../models/note.model.js');
var serverVariables = require('../../server.js');
//var brain = require('brain.js');
//const net = new brain.recurrent.LSTM();



// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.text) {
        return res.status(400).send({
            message: "Text can not be empty"
        });
    }

    // Create a Note
    const note = new Note({
        text: req.body.text, 
        time: req.body.time
    });

    // Save Text in the database
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while adding the text."
        });
    });
};


// LSTM
exports.trainModel = (req, res) => {
    // const config = {
    //     iterations: 30000,
    //     log: true,
    //     logPeriod: 5,
    //     learningRate: 0.1,
    //   };
    
    serverVariables.net.train([
      'doe, a deer, a female deer',
      'ray, a drop of golden sun',
      'me, a name I call myself',
    ]);
    
    // const output = net.run(req.params.text);  // ', a deer, a female deer'
    // console.log(output);
    res.send({message: "Trained"});
};



// LSTM
exports.predict = (req, res) => {    
    const output = serverVariables.net.run(req.params.text);  // ', a deer, a female deer'
    console.log(output);
    res.send({message: output});
};