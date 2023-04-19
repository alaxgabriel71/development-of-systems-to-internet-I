const cars = ["BMW", "Volvo", "Mini"]

let text = ""
for (let x of cars) {
    text += x + ", "
}

console.log(text)
document.getElementById("console").innerHTML = text