const pokemonData = require('./pokemon-seeds.json')
const Pokemon = require('../models/pokemon-model')

Pokemon.deleteMany({})
    .then(() =>{
        return Pokemon.insertMany(pokemonData);
    })
    .then(console.log)
    .catch((console.error))
    .finally(()=> {
        process.exit();
    })