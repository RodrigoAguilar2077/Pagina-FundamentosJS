//Hi! i'm Rodrigo 
// i'm from Ixtenco

const name = "Rodrigo";
const city = "Huamantla";

console.log("Hi! i'm " + name + " \n and i'm from " + city);

console.log('Hi i\'m ' +  name + '\n and i\'m from ' + city);

//Template literals
console.log(`Hi i'm ${ name }
        i'm from ${ city }`);

const message = `Hi i'm ${ name } i'm from ${ city }`;

console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.includes('from'));
console.log(message.startsWith('Hi'));
console.log(message.indexOf('Rodrigo'));
console.log(message.split(' '));
console.log("(=^.^=)".repeat(5));
console.log("❤️ 🖤 ".repeat(10));