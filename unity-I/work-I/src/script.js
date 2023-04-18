const conversion = document.getElementById('conversion')
const button = document.getElementById('btn')
const form = document.getElementsByTagName('form')[0]

button.onclick = changeValue
form.addEventListener("submit", function(event){
    event.preventDefault()
})

function changeValue() {
    document.getElementById('result').innerHTML = conversion.value
}



