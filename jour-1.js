// 01-Hello World

console.log("Hello World")

// 02-String

var test = "My name is Edouard"
console.log(test)

// 03-Concatenation

var name = "Edouard"
console.log("Nice to meet you " + name)

// 04-String Length

var testLength = "I m very long !"
console.log(testLength.length)

// 05- Replace

var food = "croissant is meh"
food = food.replace("meh","so good")
console.log(food)

//06-Up and Down

var basic = "this is cool"

var basicUp = basic.toUpperCase()

var basicDown = basic.toLowerCase()

console.log(basic + basicUp + basicDown)

//07-Split

var word = "banana"
var letter = word.split("")
console.log(letter)

//08- Template 

var age = 27 
var template = `I'm ${age} years old`
console.log(template)