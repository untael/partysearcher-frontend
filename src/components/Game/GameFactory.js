import Game from './Game'
import RandomValueGenerator from '../../additional/RandomValueGenerator'

let gameId = 1
export default class GameFactory {
  static getDefaultGame () {
    return new Game({
      id: gameId ++,
      name: RandomValueGenerator.getGame(),
      description: RandomValueGenerator.getGameDescription(),
    })
  }
}
