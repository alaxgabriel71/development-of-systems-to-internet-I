const express = require("express")
const cors = require("cors")
const app = express()

const PORT = 3303

app.use(cors())

app.use(express.json())

app.post("/celsius-to-fahrenheit", (req, res) => {
    const { value } = req.body
    const result = (Number(value) * (9/5)) + 32
    console.log(result)
    const data = JSON.stringify({
        result: result + ' F'
    })
    res.json(data)
})

app.post("/fahrenheit-to-celsius", (req, res) => {
    const { value } = req.body
    const result = (Number(value) - 32) * (5/9)
    console.log(result)
    const data = JSON.stringify({
        result: result + ' °C'
    })
    res.json(data)
})

app.post("/celsius-to-kelvin", (req, res) => {
    const { value } = req.body
    const result = Number(value) + 273.15
    console.log(result)
    const data = JSON.stringify({
        result: result + ' K'
    })
    res.json(data)
})

app.post("/kelvin-to-celsius", (req, res) => {
    const { value } = req.body
    const result = Number(value) - 273.15
    console.log(result)
    const data = JSON.stringify({
        result: result + ' °C'
    })
    res.json(data)
})

app.post("/fahrenheit-to-kelvin", (req, res) => {
    const { value } = req.body
    const result = (Number(value) - 32) * (5/9) + 273.15
    console.log(result)
    const data = JSON.stringify({
        result: result + ' K'
    })
    res.json(data)
})

app.post("/kelvin-to-fahrenheit", (req, res) => {
    const { value } = req.body
    const result = ((Number(value) - 273.15) * (9/5)) + 32
    console.log(result)
    const data = JSON.stringify({
        result: result + ' F'
    })
    res.json(data)
})

app.listen(PORT, () => {
    console.log(`Server listening the port ${PORT}`)
})