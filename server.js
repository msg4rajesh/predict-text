const express = require('express');
const bodyParser = require('body-parser');
//brainJS thing
var brain = require('brain.js');
var schedule = require('node-schedule');
const Note = require('./app/models/note.model.js');


// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "RESTful API for text prediction using LSTM recurrent neural network. The model is sheduled to start training at 01th minuete of every hour. The training will take 2-3 minutes"});
});

// Require Notes routes
require('./app/routes/note.routes.js')(app);

// listen for requests
//for localhost uncomment this and comment below line|| app.listen(3000, () => {
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening on port 3000");
});

//BrainJS thing wth sheduler
const net = new brain.recurrent.LSTM();
var j = schedule.scheduleJob('*/10 * * * *', function(){
    console.log('SHEDULED TASK: Train Model Executing.....');

    //retrive data from Daatabase
    var resArray=[];
    Note.find()
    .then(notes => {
        console.log(notes);
        notes.forEach(function(item) {
            //etc
            console.log(item.text);
            resArray.push(item.text.toString());
          });
          net.train(resArray);
          console.log('SHEDULED TASK: Train Model Completed');
          //console.log(resArray);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
    // net.train([
    //     'doe, a deer, a female deer',
    //     'ray, a drop of golden sun',
    //     'me, a name I call myself',
    //   ]);
    exports.net =net;
    exports.brain =  brain; 
    
});
// const output = net.run('doe');  // ', a deer, a female deer'
// console.log(output);