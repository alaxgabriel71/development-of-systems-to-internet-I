const conversion = document.getElementById('conversion')
const button = document.getElementById('btn')
const form = document.getElementsByTagName('form')[0]
const input = document.getElementById('input')
const result = document.getElementById('result')

console.log("start")

button.onclick = getResult
form.addEventListener("submit", function(event){
    event.preventDefault()
})

function getResult() {
    console.log("convert")
    const host = `http://localhost:3303/${conversion.value}`

    console.log(host)
    
    const value = JSON.stringify({
        value: input.value
    })

    console.log(value)

    fetch(host, {
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
        .then(re => result.innerHTML = re)
}



