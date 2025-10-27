// A thenable is an object with a `then()` function. The
// below thenable behaves like a promise that fulfills with
// the value `42` after 10ms.
const thenable1 = {
    then: function(onFulfilled) {
        setTimeout(() => onFulfilled(42), 10);
    }
};

Promise.resolve().
then(() => thenable1).
then(v => {
    console.log(v)// 42
});


// A thenable is an object with a `then()` function. The
// below thenable behaves like a promise that fulfills with
// the value `42` after 10ms.
const thenable2 = {
    then: function(onFulfilled) {
        setTimeout(() => onFulfilled(42), 10);
    }
};

const v = await thenable2;
console.log(v);