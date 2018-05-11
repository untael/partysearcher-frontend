// export default class SaveGame {
//   static trySaveGame (game) {
//     const mongoose = require('mongoose')
//     mongoose.connect('mongodb://localhost/psdb')
//       .then(() => console.log('MongoDB has started ...'))
//       .catch(e => console.log(e))
//     require('./game.model')
//
//     const Game = mongoose.model('games')
//
//     const savedGame = new Game ({
//       name: game.name,
//       description: game.description
//     })
//
//     savedGame.save()
//       .then(saveDgame => {
//         console.log(savedGame)
//       })
//       .catch(e => console.log(e))
//   }
// }