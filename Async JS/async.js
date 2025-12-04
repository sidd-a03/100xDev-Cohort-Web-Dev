console.log("Hi");

function print() {
    console.log("Click the button");
}

setTimeout(print, 1000); // i/o intensive task

let c = 0;
for(let i = 0; i < 1000000000000; i++) { // CPU intensive task
    c++;
}

console.log("Dont expensive operation");
