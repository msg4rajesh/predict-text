// var brain = require('brain.js');

// //const net = new brain.NeuralNetwork();

// // net.train([{input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 }},
// //            {input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 }},
// //            {input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 }}]);
// // net.train([{input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 }},
// //     {input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 }},
// //     {input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 }}]);

// // const output = net.run({ r: 1, g: 0.4, b: 0 });  // { white: 0.99, black: 0.002 }
// // console.log(output);



// const net = new brain.recurrent.LSTM();

// net.train([
//   'doe, a deer, a female deer',
//   'ray, a drop of golden sun',
//   'me, a name I call myself',
// ]);

// const output = net.run('doe');  // ', a deer, a female deer'
// console.log(output);

