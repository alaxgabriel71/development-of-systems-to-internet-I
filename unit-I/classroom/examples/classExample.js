class Car {
    constructor(name, year) {
        this.name = name
        this.year = year
    }

    age() {
        const date = new Date()
        return date.getFullYear() - this.year
    }
}

let myCar = new Car("HB20", 2014)

document.getElementById("console").innerHTML = `My car has ${myCar.age()} years old!`