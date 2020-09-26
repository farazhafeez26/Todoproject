let cars = ["audi", "bmw"];

console.log(cars);

cars.push("mercedes");

console.log(cars);



// ------
cars.pop();
console.log(cars);

// map 

let age = 43;
let bornIn = 1990;
let computeAge = new Date().getFullYear() - bornIn; // calculate age

console.log(`I am ${age} years old`);
console.log(`I am ${computeAge} years old`);
console.log([...cars, "xxx"]);


console.log(
    cars.findIndex(function find(car) {  // why cant i use find index method on this?
        return car === "audi";
    })
);

for (let i = 0; i < cars.length; i++) {
    console.log("i love " + cars[i]);
}

const redCars = cars.map(function paint(car) {
    return "red_" + car;
});
console.log(redCars);

const newCars = ["tesla", "volvo", "bmw"];

const isElectric = newCars.map(function checkelec(newCar) {
    return newCar === "tesla";// ?????
});
console.log(isElectric);




const isRed = newCars.map(function checkelec(newCar) {
    if (newCar === "tesla") {
        return newCar + "_red"

    } else {
        return newCar
    }
});
console.log(isRed);



// reduce function
const listNumbers = [1, 3, 6, 9, 6, 2, 8, 9];

console.log(
    listNumbers.reduce(function sum(acc, num) {
        return acc + num;
    }, "0"),
);



const letters = ["F", "a", "r", "a", "z"];

console.log(
    letters.reduce((function nameConcatenator(acc, letter, index) {
        return acc + "__" + index; //initialValue Optional  A value to use as the first argument to the first call of the callback. If no initialValue is supplied, the first element in the array will be used as the initial accumulator value and skipped as currentValue. Calling reduce() on an empty array without an initialValue will throw a TypeError.

    })));


console.log(
    letters.reduce((function addz(acc, letter) {
        return acc + " . H" + letter;
    })));