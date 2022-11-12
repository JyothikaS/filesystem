//console.log(process)
console.log("hello from node")
const fs = require('fs');
fs.writeFileSync('myfile.txt', 'helloooooooooooooo');
//--function--
        // function greet(){
        //     console.log("hai from node!!!!");
        // }
        // greet();

// --modules--
// module.exports = function greet(){
//         console.log("hai from node!!!!");
//     }
//     console.log(module);
//     module.exports();

// --to call from another file--
// const sec = require('./second')
// sec();

//--another way--
// const sec = require('./second')
// sec.welcome();
// sec.sayHi();
// console.table(sec)

// //--another---
// const sec = require('./second')
// console.log(sec.details.name)
