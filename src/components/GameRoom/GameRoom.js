export default class GameRoom {
  username = ''
  game = null
  description = ''
  users = []

  constructor (data) {
    Object.assign(this, data)
  }
}