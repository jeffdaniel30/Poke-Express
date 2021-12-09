const express = require ('express')
/* initialize express + configure it */
const app = express()
const methodOverride = require('method-override')
// controllers start here
const pokemonController = require('./controllers/pokemonController')

// middle ware
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.set('view engine', 'hbs')
app.use(methodOverride('_method'))
app.use('/', pokemonController)


/* listen on ports */
app.listen(3000 , () => console.log(`Listening on port port 3000`))