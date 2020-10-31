const mongoose = require('mongoose')

const personSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    validate: value => {
      if (!validator.isMobilePhone(value)) {
          throw new Error({error: 'Invalid Email address'})
      }
    }
  },
  email: {
    type: String,
    required: true,
    validate: value => {
      if (!validator.isEmail(value)) {
          throw new Error({error: 'Invalid Email address'})
      }
  }
  },
  birth: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
})

const person = mongoose.model('persons', personSchema)

module.exports = person