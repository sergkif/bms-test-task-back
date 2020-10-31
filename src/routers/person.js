const express = require('express')
const Person = require('../models/Person')

const router = express.Router()

router.post('/persons', async(req, res) => {
  try {
    let params = {}
    Object.assign(params, req.body.name && {name: {"$regex": new RegExp(req.body.name, "i")}})
    Object.assign(params, req.body.phone && {phone: {"$regex": req.body.phone}})
    Object.assign(params, req.body.email && {email: {"$regex": req.body.email}})
    Object.assign(params, req.body.birth && {birth: {"$regex": req.body.birth}})
    const persons = await Person.find(params)
    res.status(200).send(persons)
  } catch(error) {
    res.status(404).send(error)
  }  
})

router.get('/persons/:id', async(req, res) => {
  try {
    const person = await Person.findOne({_id: req.params.id})
    res.status(200).send(person)
  } catch(error) {
    res.status(404).send(error)
  }
})

module.exports = router
