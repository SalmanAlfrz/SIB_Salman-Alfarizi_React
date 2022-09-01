// mendefenisikan class
class Person {
    // constructor
    constructor (name) {
        this._name = name
    }
    getName() {
        return this._name
    }
}

// class inheritance
class Employee extends Person {
    constructor(name, title) {
        super(name) //super method
        this._title = title
    }
    showTitle() {
        return this._name + " is " + this._title
    }
    doWork() {
        return this._name + " Is Working"
    }
}

//output
// let scott = new Employee("Salman Alfarizi"," Staff")
let scott = new Employee("Salman Alfarizi")
let scott2 = new Person("Salman Alfarizi")
console.log("class Employee " + scott.getName())
console.log("class Person " + scott2.getName())