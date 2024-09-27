// High order functions
// Funciones de orden superior
// Funciones que reciben como
// parametros otras funciones

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

const calculator = (a, b, callback) =>{
    const result = callback(a, b);
    console.log(result);
}

calculator(15, 9, suma);
calculator(15, 9, resta);
calculator(15, 9, (a, b) => a * b);
calculator(15, 9, (a, b) => a / b);

const foods2 =['tamales', 'pizza', 'chiaquiles', 'pozole', 'tacos', 'maruchan']

foods.forEach(food => console.log(food));
foods.forEach(food => console.log(food.length));
foods.forEach(food => console.log(food.includes('a')));

const FOODS = foods.map(food => food.toUpperCase());
console.log(FOODS);

const foodsEmojis = foods.map(food => food + '🌮');
console.log(foodsEmojis);

const sdoof = foods.map(food => {
    const separated = food.split('');
    const reversed = separated.reverse();
    const joined = reversed.join('');
    return joined;
    // food = food.split('').reverse().join('');
});

console.log(sdoof);

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const cuadrado = numbers.map(num => num ** 2);
const cubo = numbers.map(num => num ** 3);
const mitad = numbers.map(num => num / 2);

console.log(cuadrado);
console.log(cubo);
console.log(mitad);


function wrappedGift(gifts){
    return gifts.map(gift => {
        const tapa = '*'.repeat(gift.length + 2);
        return `${tapa}\n*${gift}*\n${tapa}`;
    });
}
const foods3 =['tamales', 'pizza', 'chiaquiles', 'pozole', 'tacos', 'maruchan']
const wrappedFoods = wrappedGift(foods);
wrappedFoods.forEach(food => console.log(food));

// filter
const foods =['tamales', 'pizza', 'chiaquiles', 'pozole', 'tacos', 'maruchan']
const containsZ = foods.filter(food => food.includes('z'));
console.log(containsZ);

const endsWithS = foods.filter(food => food.endsWith('s'));
console.log(endsWithS);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pairs = numbers.filter(num => num % 2 === 0);
console.log(pairs);

const impairs = numbers.filter(num => num % 2 !== 0);
console.log(impairs);

const mayor5 = numbers.filter(num => num > 5);
console.log(mayor5);

// forEach, map, fiter

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// reduce
const sumatoria = numeros.reduce((a, b) => a + b);
const factorial = numeros.reduce((a, b) => a * b);
console.log(sumatoria);
console.log(factorial);
console.log(numeros);

//some(or) every(and)
const pisitivos = numeros.every(num => num > 0);
console.log(pisitivos);
const negativos = numeros.every(num => num < 0);
console.log(negativos);

const ages = [29, 21, 25, 17, 18];
const algunosMayores = ages.some(age => age > 18);
console.log(algunosMayores);
const algunosMenores = ages.some(age => age < 18);
console.log(algunosMenores);

const fruits = ['🍎', '🍐', '🍊', '🍑', '🍒'];
const index_durazno = fruits.findIndex(fruit => fruit === '🍑');
console.log(fruits[index_durazno]);