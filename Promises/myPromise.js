class MyPromise {
    constructor(fn) {
        this.fn = fn;
        this.fn (() => {
            this.resolve();
        })
    }
    then(cb) {
        this.resolve = cb;
    }
}

function setTimeoutPromisified(resolve) {
    setTimeout(function () {
        console.log("Will wait for 3 seconds...");
        resolve();
    }, 3000);
}

function read() {
    return new MyPromise(setTimeoutPromisified);
}

function cb() {
    console.log("Finished...")
}

const p = read();
p.then(cb);