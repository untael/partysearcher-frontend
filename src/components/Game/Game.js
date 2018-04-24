export default class Game {
  id = 0;
  name = '';
  description = '';

  constructor (data) {
    Object.assign(this, data)
  }
}