const fs = require("fs"); // fs -> file system

function read(err, data) {
    if (err) return console.table(err);
    console.log("Data is: " + data);
}

//utf-8 is encoding otherwise it will return a value of hex code of the text inside that file

fs.readFile("dhello.txt", "utf-8", read); // async => i/o intensive

fs.readFile("hi.txt", "utf-8", read); //async

console.log("Done");