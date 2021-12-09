const express = require('express')
const router =express.Router()

const Pokemon = require('../models/pokemon-model')

router.get('/', (req, res) => {
    Pokemon.find({})
        .then(pokemon => {
            console.log(pokemon)
            // res.send(results)
            res.render('index',{pokemon})
        })
})
router.get('/show/:id', (req, res, next) => {
    const id = req.params.id
    Pokemon.findById(id)
    // .then(pokemon => res.json(pokemon[id]))
    .then(pokemon=>res.render('show',{pokemon}))
    .catch(next)
  })
router.get('/new', (req, res)=>{
    res.render('new')
})
router.post ('/pokemon/create', (req,res,next) => {
    Pokemon.create( req.body )
    .then( pokemon => res.json(pokemon))
    .catch(next)
    .then(res.redirect('/'))
})
//Updating a Pokemon's info using the findOneAndUpdate() on the /pokemon/:id route! Use req.body to pis the data to the model.
router.put('/pokemon/:id', (req,res,next) =>{
    const id = req.params.id
    Pokemon.findOneAndUpdate(
        { _id: id },
        {
        name: req.body.name,
        img: req.body.img
          },
        {new:true}
    )
          .then(pokemon => {
              res.json(pokemon)
          })
          .catch(next)
})
router.get('/pokemon/edit/:id', (req,res) => {
    const routeId = req.params.id
    Pokemon.findById(routeId)
        .then(pokemon => {
            res.render('edit', pokemon)
        })
})
router.put('/pokemon/edit/:id', (req,res, next) =>{
    const id = req.params.id;
    Pokemon.findOneAndUpdate(
        { _id: id },
        {
            name: req.body.name,
            img: req.body.img
          },
        {new:true}
    )
          .then(pokemon => {
            res.json(pokemon)
        })
          .then(res.redirect('/'))
          .catch(next)
})


router.delete('/delete/:id', (req, res, next) => {
    const id = req.params.id
    Pokemon.findOneAndDelete(
        {_id: id}
    )
    .then(res.redirect('/'))
    .catch(next)
})

module.exports = router
// Finally, there is the D in CRUD. Create a DELETE route at /pokemon/:id and use the findOneAndDelete() method to delete a Pokemon
// router.delete('/pokemon/delete/:id', (req,res,next)=>{
//     const id = req.params.id
//     Pokemon.findOneAndDelete(
//         {_id:id}
//     )
//     .then(pokemon => {
//                 res.json(pokemon)
//             })
//     .catch(next)
// })
// All pokemon
// router.get('/pokemon', (req, res) => {
//     Pokemon.find({})
//         .then(pokemon => res.json(pokemon))
// })
//get them showiiinnnnnnngggg woot

// // By index

// // for the C in CRUD, use the create() method to create a new Pokemon in the post route.
// router.post('/pokemon', (req, res, next)=>{
//     Pokemon.create(req.body)
//     .then(pokemon => res.json(pokemon))
//     .catch(next)
// })
// Users should be able to insert a new pokemon into the database using a form on a new.hbs page. Creation should be handled via a POST route to the /pokemon route