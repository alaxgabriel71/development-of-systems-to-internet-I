const numbers = [45, 4, 9, 16, 25]

let text = ""
numbers.forEach(myFunction)

function myFunction(value) {
    text += value + " "
}

console.log(text)
document.getElementById("console").innerHTML = "text"