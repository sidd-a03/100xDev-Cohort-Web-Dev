let x: number = 1; // type inferencing

console.log(x);

const greeting = (name: string
): string => `Hello ${name}!`;

console.log(greeting("Achinta"));

const delayedCall = (fn: () => void) => setTimeout(fn, 1000);

delayedCall(() => console.log('Achinta'));