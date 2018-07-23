import GameRoom from './GameRoom'
import RandomValueGenerator from '../../additional/RandomValueGenerator'

export default class GameRoomFactory {
  static getDefaultGameRoom () {
    return new GameRoom({
      username: RandomValueGenerator.getString(),
      game: RandomValueGenerator.getGame(),
      description: RandomValueGenerator.getGameDescription(),
    })
  }
}
