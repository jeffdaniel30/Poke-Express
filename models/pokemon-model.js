const mongoose = require('../db/connections')

const PokemonSchema = new mongoose.Schema(
    {
        name: String,
        img: String
    }
)
const Pokemon = mongoose.model('Pokemon', PokemonSchema)
module.exports = Pokemon