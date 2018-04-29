const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GameSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
})

mongoose.model('games', GameSchema)
