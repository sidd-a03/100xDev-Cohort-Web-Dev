/*

function callback() {
    console.log("Some times have passed");
}

setTimeout(callback, 2000);

*/

const fs = require('fs');
//
// function result(err, data) {
//     if(err) return console.error(err);
//     console.log(data);
// }
//
// fs.readFile("a.txt", "utf-8", result);

// Promisified version of readFile
function afterPromisified(resolve) {
    fs.readFile("a.txt", "utf-8", (err, data) => {
        if(err) return console.error(err);
        resolve(data);
    });
}

function readFilePromisified() {
    return new Promise(afterPromisified);
}

function read(data) {
    console.log(data)
}

const p = readFilePromisified();
p.then(read);


