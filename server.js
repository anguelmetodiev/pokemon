/*
require express
set express() to a variable
set a variable of port to 3000
set your app to listen to the port and include a console.log(), so that you can tell when your server is running
include a get route / that will res.send('Welcome to the Pokemon App!'); so that when you got to localhost:3000, you will see Welcome to the Pokemon App!
*/

const express = require("express")
const app = express()
const PORT = 3000

//localhost:3000 Welcome to the Pokemon App!
app.get("/", (req, res) => {
    res.send("Welcome to the Pokemon App!")
})

//Server is running on port 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

