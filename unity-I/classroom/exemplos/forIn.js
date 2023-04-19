const person = {firstName: "Alax", lastName:"Oliveira", age: 26}

let text = ""

//for in in objects
for (let x in person) {
    text += person[x] + " "
}

console.log(text)

const numbers = [45, 4, 9, 16, 25]
text = ""

//for in in arrays
for (let x in numbers) {
    text += numbers[x] + " "
}

console.log(text)