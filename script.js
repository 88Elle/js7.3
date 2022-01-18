const arr = [
    {name: 'Вася', age: 25},
    {name: 'Петя', age: 30},
    {name: 'Маша', age: 29}
]
let low = 0;
let sum = arr.reduce((acc, item) => acc + item.age, low);
let average = sum / arr.length;

console.log(sum);
console.log(average);