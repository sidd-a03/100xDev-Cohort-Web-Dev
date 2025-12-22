interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

type UpdatedProps = Pick<User, 'name' | 'age' | 'email'>
type UpdatePropsOptional = Partial<UpdatedProps>


const updateUser = (update: UpdatePropsOptional) => {

}

// readonly

const user: Readonly<UpdatePropsOptional> = {
    name: "achinta"
}

// user.name = "djf" // you can not change since it is readonly

interface User1 {
    id: string;
    name: string;
}

/* Record
* Record let’s you give a cleaner type to objects
You can type objects like follows -
* */

// ugly syntax
type Users1 = { [key: string]: User1 };

const users: Users1 = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

// cleaner syntax using Record

interface User2 {
    id: string;
    name: string;
}

type Users2 = Record<string, User2>;

const users2: Users2 = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

console.log(users2['abc123']); // Output: { id: 'abc123', name: 'John Doe' }

// Map

interface User3 {
    id: string;
    name: string;
}

// Initialize an empty Map
const usersMap3 = new Map<string, User3>();

// Add users to the map using .set
usersMap3.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap3.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap3.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }


// Exclude

type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK