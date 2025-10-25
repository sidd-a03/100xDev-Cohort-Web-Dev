const users = [
    {
        name: "John",
        age: 5,
    },
    {
        name: "Joe",
        age: 15,
    },
    {
        name: "Joy",
        age: 25,
    },
    {
        name: "January",
        age: 30,
    }
];

const result = users.filter(user => user.age > 20);
console.table(result);