export default class Game {
  id = ''
  name = ''
  description = ''

  constructor (data) {
    Object.assign(this, data)
  }
}