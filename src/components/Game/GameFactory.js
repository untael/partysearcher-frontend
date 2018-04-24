import Game from './Game'
import RandomValueGenerator from '../../additional/RandomValueGenerator'

export default class GameFactory {
  static getDefaultGame () {
    return new Game({
      id: RandomValueGenerator.getNumber(),
      name: RandomValueGenerator.getGame(),
      description: RandomValueGenerator.getGameDescription(),
    })
  }
}
