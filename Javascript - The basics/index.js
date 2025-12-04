let user = {
    name: "Achinta",
    age: 21
}

console.table(user)

function greet(user) {
    console.log("Hello " + user["name"] + " and your age is " + user.age);
}

greet(user);