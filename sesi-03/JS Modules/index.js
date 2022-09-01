import fetch from 'node-fetch';
import Employee from "./Employee.js"; //import class Employee
const mark = new Employee() // create object mark from Employee

// output
console.log(mark.doWork())

// implicit return di arrow function
const response = await fetch('https://fake-tweets-api.herokuapp.com/posts')
const tweet = await response.json()
console.log(tweet)

/* ---------------------------- */
// bungkus kedalam fungsi
const fetchTweets = async() => {
    const response = await fetch('https://fake-tweets-api.herokuapp.com/posts')
    const tweet = await response.json()
    console.log(tweet)
}

fetchTweets();

/* ---------------------------- */
/*
    fungsi yang ingin langsung di eksekusi atau 
    istilah kerennya IIFE (Immediately Invoked Function Expression)
    bisa kita tulis seperti ini.
*/
(async() => {
    const response = await fetch('https://fake-tweets-api.herokuapp.com/posts')
    const tweet = await response.json()
    console.log(tweet)
})