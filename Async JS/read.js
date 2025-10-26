const fs = require("fs"); // fs -> file system

//utf-8 is encoding otherwise it will return a value of hex code of the text inside that file
const contents = fs.readFileSync("hello.txt", "utf-8"); // => don't use this
console.log(contents);

const contents2 = fs.readFileSync("hi.txt", "utf-8");
console.log(contents2);

/*
*   readFile -> its reads file asynchronously
*   readFileSync -> its reads file synchronously
* */