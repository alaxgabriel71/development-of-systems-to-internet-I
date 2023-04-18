const express = require("express")
const app = express()

const PORT = 3303

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(PORT, () => {
    console.log(`Server listening the port ${PORT}`)
})