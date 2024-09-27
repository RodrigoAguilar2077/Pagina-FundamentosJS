// if esle if else

let age = 18;
if (age >= 18) {
    console.log("Es mayor de edad!");
} else if (age > 15) {
    console.log("Esta verde!");
} else {
    console.log("Carcel");
}

//Truthy and Falsy
// myNum = 0 --> false
// myNum > 0 --> true
// myStr = '' --> false
// myStr = 'Hi' -->true


let username ='';
let defaultName;

if (username) {
    defaultName = username;
} else {
    defaultName = 'Invitado';
}

if (username) {
    defaultName = username;
} else {
    defaultName = 'Invitado';
}

defaultName = username || 'Invitado';

(age >= 18)
    ? console.log("Es mayor de edad!") 
    : console.log("Carcel");

defaultName = username ? username : 'invitado';
console.log(defaultName);

//switch case
const day = Math.floor(Math.random() * 7);
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
        break;
}