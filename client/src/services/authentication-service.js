import api from './api'

export default {
  register(credentials) {
    return api().post('register', credentials)
  },
}

// AuthenticationService.register({
//   name: ''
//   email: 'testing@gmail.com'
//   password: ''
// })
