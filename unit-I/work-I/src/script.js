// putting the HTML tags into JS variables
const conversion = document.getElementById('conversion')
const button = document.getElementById('btn')
const form = document.getElementsByTagName('form')[0]
const input = document.getElementById('input')
const inputUnit = document.getElementById('input-unit')
const resultUnit = document.getElementById('result-unit')
const result = document.getElementById('result')

// variables to communicate with the server
const port = 3303
const host = `http://localhost:${port}`

// responding to events
form.onsubmit = getResult
conversion.onchange = setUnit

// using fetch to reach the result
function getResult(event) {
    event.preventDefault() // prevents the page from reloading after the form submit
    const path = `${host}/${conversion.value}`

    const value = JSON.stringify({
        value: input.value
    })

    fetch(path, {
        method: 'POST',
        body: value,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        mode: 'cors'
    })
        .then(response => response.json())
        .then(json => JSON.parse(json))
        .then(data => data.result)
        .then(res => result.innerHTML = res)
}

// sets the input and result temperature unit
function setUnit() {
    switch (conversion.value) {
        case ("celsius-to-fahrenheit"):
            inputUnit.innerHTML = "°C"
            resultUnit.innerHTML = "F"
            break
        case ("fahrenheit-to-celsius"):
            inputUnit.innerHTML = "F"
            resultUnit.innerHTML = "°C"
            break
        case ("kelvin-to-celsius"):
            inputUnit.innerHTML = "K"
            resultUnit.innerHTML = "°C"
            break
        case ("celsius-to-kelvin"):
            inputUnit.innerHTML = "°C"
            resultUnit.innerHTML = "K"
            break
        case ("fahrenheit-to-kelvin"):
            inputUnit.innerHTML = "F"
            resultUnit.innerHTML = "K"
            break
        case ("kelvin-to-fahrenheit"):
            inputUnit.innerHTML = "K"
            resultUnit.innerHTML = "F"
            break
        default:
            break
    }
    result.innerHTML = null
    input.value.innerHTML = null
}

