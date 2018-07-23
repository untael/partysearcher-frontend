export default class User {
  id = ''
  username = ''
  password = ''
  passwordConfirm = ''
  age = ''
  voice = false
  sex = false


  constructor (data) {
    Object.assign(this, data)
  }
}
