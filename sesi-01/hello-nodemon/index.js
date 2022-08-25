//variable var
var angka = 50
angka = 10
console.log(angka)

//variable const
let score = 50
console.log("Hasil "+score)

let playerName = "Budi"
console.log("Hasil "+playerName)
playerName = "Andi"
console.log("Player 2 "+playerName)

//variable konstanta
const objectAngka = {id:1, name:'Arif', jenKel:'1'}
objectAngka.id = 2
objectAngka.name = 'Salman'
objectAngka.jenKel = 'Laki-laki'
console.log(objectAngka)

const arrayAngka = [1,2,3,4,5]
arrayAngka.push(6)
arrayAngka.push(7)
console.log(arrayAngka)

// tipe data number
let origiinalNum = 23
let newNum  = origiinalNum + 5
console.log(newNum)

// tipe data string
let dataString = 'Ini tipe data string'
console.log(dataString)

//manipulasi string
//menggabungkan string
let visitor = 'siapa nama kamu'
let message = 'Halo ' + visitor
console.log(message)

//Tipe data boolean
let isRaining = true
console.log (isRaining)

//Arrays
//deklarasi arrays
var kode = ['React', 'JS', 'PHP']
let kodeLet = ['React', 'JS', 'PHP']
const kodeConst = ['React', 'JS', 'PHP']

//operasi arrays
// merge 2 array
var fruits = ['anggur', 'melati', 'apel']
var buahBuahan = ['pir','jeruk']
fruits.push.apply(fruits, buahBuahan)
console.log(fruits)

//menghapus array
var fruits = ['anggur', 'melati', 'apel']
var indexHapus = 1;
fruits.splice(indexHapus,1)
console.log(fruits)

//mengosongkan arrays
var fruits = ['anggur', 'melati', 'apel']
fruits = []
console.log(fruits)

// array multidimensi

