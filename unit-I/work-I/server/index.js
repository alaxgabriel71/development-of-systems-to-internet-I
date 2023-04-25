const express = require("express") // express importation
const cors = require("cors") // cors importation
const app = express() // express instatiation

// defines the port to be listened to by the server
const PORT = 3303

app.use(cors()) // provides an express middleware to enable CORS (Cross-Origin Resources Sharing)

app.use(express.json()) // allows the express to use JSON content

// routes to calculate the temperature conversion
app.post("/celsius-to-fahrenheit", (req, res) => {
    const { value } = req.body
    const result = (Number(value) * (9/5)) + 32
    const data = JSON.stringify({
        result: result.toFixed(2)
    })
    res.json(data)
})

app.post("/fahrenheit-to-celsius", (req, res) => {
    const { value } = req.body
    const result = (Number(value) - 32) * (5/9)
    const data = JSON.stringify({
        result: result.toFixed(2) 
    })
    res.json(data)
})

app.post("/celsius-to-kelvin", (req, res) => {
    const { value } = req.body
    const result = Number(value) + 273.15
    const data = JSON.stringify({
        result: result.toFixed(2)
    })
    res.json(data)
})

app.post("/kelvin-to-celsius", (req, res) => {
    const { value } = req.body
    const result = Number(value) - 273.15
    const data = JSON.stringify({
        result: result.toFixed(2) 
    })
    res.json(data)
})

app.post("/fahrenheit-to-kelvin", (req, res) => {
    const { value } = req.body
    const result = (Number(value) - 32) * (5/9) + 273.15
    const data = JSON.stringify({
        result: result.toFixed(2)
    })
    res.json(data)
})

app.post("/kelvin-to-fahrenheit", (req, res) => {
    const { value } = req.body
    const result = ((Number(value) - 273.15) * (9/5)) + 32
    const data = JSON.stringify({
        result: result.toFixed(2)
    })
    res.json(data)
})

// starts the server to listen te indicated port
app.listen(PORT, () => {
    console.log(`Server listening the port ${PORT}`)
})