export default class GameRoom {
  username = ''
  game = null
  description = ''

  constructor (data) {
    Object.assign(this, data)
  }
}