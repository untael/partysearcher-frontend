export default class RandomValueGenerator {

  static getNumber() {
    Math.floor(Math.random() * 1e9)
  }

  static getString () {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text
  }

  static getLongString () {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < 25; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text
  }

  static getGame () {
    var text = 'Game '
    var possible = '0123456789'

    for (var i = 0; i < 3; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text
  }

  static getGameDescription () {
    var text = 'Game Description '
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    for (var i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text
  }
}
