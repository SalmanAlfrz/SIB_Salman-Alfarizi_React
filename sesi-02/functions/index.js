// Arrow Function and Bind(this)
// function declaration
function add (a, b) {
    return a + b
}
// function expression
const add2 = function (a, b) {
    return a + b
}
// arrow function
const add3 = (a, b) => { return a+b }
//output
console.log(add3(1,2))

//implicit arrow function
const addImplicit = (a, b) => a +b 
const square = x => x * x;
console.log(square(2))

// manajemen this keyword
function Person() {
    this.age = 0
    setInterval(() => {
        this.age++;
        console.log(this.age)
    }, 1000)
}
// Person();

// Higher-Order Function
// setInterval(() => {
//     console.log("Tick")
// }, 1000)

//Filter
const animals = [
{name: "Fluffy", species: "cat"},
{name: "Carlo", species: "dog"},
{name: "Nemo", species: 'fish'},
{name: "Hamilton", species: 'dog'},
{name: "Dorry", species: 'fish'},
{name: "Ursa", species: 'cat'}]

// let fish = [];
// for(let i = 0; i < animals.length; i++) {
//     if(animals[i].species === 'fish') {
//         fish.push(animals[i])
//     }
// }
let fish = animals.filter((animals) => animals.species === 'fish')
console.log(fish)

// map
// let names = [];
// for (let i = 0; i < animals.length; i++) {
//     names.push(animals[i].name)
// }
let names = animals.map((animals) => animals.name + " is a " + animals.species)
console.log(names)

// Reduce
let orders = [
    { total: 325 },
    { total: 512 },
    { total: 128 },
    { total: 32 }
]
let total = 0;
// for (let i=0; i<orders.length; i++)
// {
//     total = total + orders[i].total
// }
total = orders.reduce((total, order) => total + order.total, 0)
console.log(total)