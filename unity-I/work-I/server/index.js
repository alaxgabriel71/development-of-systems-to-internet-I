const express = require("express")
const cors = require("cors")
const app = express()

const PORT = 3303

app.use(cors())

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello")
})

app.post("/celsius-to-fahrenheit", (req, res) => {
    const { value } = req.body
    const result = (Number(value) * (9/5)) + 32
    console.log(result)
    const data = JSON.stringify({
        result: result + ' F'
    })
    res.json(data)
})

app.listen(PORT, () => {
    console.log(`Server listening the port ${PORT}`)
})