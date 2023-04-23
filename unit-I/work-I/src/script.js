const conversion = document.getElementById('conversion')
const button = document.getElementById('btn')
const form = document.getElementsByTagName('form')[0]
const input = document.getElementById('input')
const inputUnit = document.getElementById('input-unit')
const resultUnit = document.getElementById('result-unit')
const result = document.getElementById('result')


const port = 3303
const host = `http://localhost:${port}`

button.onclick = getResult
conversion.onchange = setUnit

form.addEventListener("submit", function (event) {
    event.preventDefault()
})

function getResult() {
    if (conversion.value === 'default') {
        return window.alert("Choose a conversion option!")
    } else {
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
}

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
    result.innerHTML = ''
}

