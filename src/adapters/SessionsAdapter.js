const path = 'https://rockhurstllc-backend.herokuapp.com/api/v1/sessions'
// const path = 'http://localhost:3000/api/v1/sessions'
export default class SessionsAdapter {

  static getUser(user){
    debugger
    return fetch(path, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(user)
    })
    .then( resp => resp.json())
  }

  static currentUser(){
    return fetch(`${path}/current_user`, {
      method: 'GET',
      headers: headers()
    })
    .then( resp => resp.json())
  }

}

let headers = () => {
  const token = localStorage.getItem('token')
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  }
}
