/*
require express
set express() to a variable
set a variable of port to 3000
set your app to listen to the port and include a console.log(), so that you can tell when your server is running
include a get route / that will res.send('Welcome to the Pokemon App!'); so that when you got to localhost:3000, you will see Welcome to the Pokemon App!
*/

require ('dotenv').config() // MongoDB requirements
const express = require("express")
const app = express()
const PORT = 3000
const mongoose = require('mongoose');

// require model pokemon
const Pokemon = require("./models/pokemon")

app.use(express.urlencoded({extended:true}))

const reactViews = require("express-react-views")
app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

// localhost:3000 Welcome to the Pokemon App!
app.get("/", (req, res) => {
    res.send("Welcome to the Pokemon App! <html><br> <a href = '/pokemon'> PokeDEX - Show all Pokemon</a> <br> <a href = '/pokemon'><img src='https://thumbs.gfycat.com/DampSpanishCleanerwrasse-max-1mb.gif'></a> </html>")
})

// get pokemon and http://localhost:3000/pokemon you can see the JSON file bulbasaur, ivysaur, ... ,wartortle

app.get('/pokemon', (req,res) => {
    Pokemon.find({}, (error,allPokemon)=>{
        res.render('Index',{
            pokemon: allPokemon
            })
        })
     })


     app.get('/pokemon/new', (req,res) =>{
        res.render('New')
    })

//POST
app.post('/pokemon/', (req,res) =>{
    Pokemon.create(req.body,(error, createdPokemon)=>{
    res.redirect('/pokemon')
    })
})

app.get('/pokemon/:id', (req,res) =>{
    Pokemon.findById(req.params.id, (err,foundPokemon)=>{
		res.render('Show', {
		pokemon: foundPokemon
		})
	})
})

    app.get('/pokemon/:id', (req,res) =>{
        Pokemon.findById(req.params.id, (err,foundPokemon)=>{
            res.render('Show', {
            pokemon: foundPokemon
            })
        })
        // res.render('Show', {
        //     pokemon: Pokemon[req.params.id]})
    })

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
})


//Server is running on port 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
