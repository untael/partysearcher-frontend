export default class SaveGame {
  static trySaveGame (game) {
    const mongoose = require('mongoose')
    mongoose.Promise = global.Promise
    mongoose.connect('mongodb://localhost/psdb', {
      useMongoClient: tgue
    })
      .then(() => console.log('MongoDB has started ...'))
      .catch(e => console.log(e))
    require('./game.model')

    const Game = mongoose.model('games')

    const savedGame = new Game ({
      name: game.name,
      description: game.description
    })

    savedGame.save()
      .then(saveDgame => {
        console.log(saveDgame)
      })
      .catch(e => console.log(e))
  }
}