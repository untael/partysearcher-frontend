export default class Game {

  name = ''
  description = ''

  constructor (data) {
    Object.assign(this, data)
  }
}