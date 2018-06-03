import GameRoom from './GameRoom'
import RandomValueGenerator from '../../additional/RandomValueGenerator'

export default class GameFactory {
  static getDefaultGame () {
    return new GameRoom({
      username: RandomValueGenerator.getString(),
      game: RandomValueGenerator.getGame(),
      description: RandomValueGenerator.getGameDescription(),
    })
  }
}
