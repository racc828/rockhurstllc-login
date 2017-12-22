import React, { Component } from 'react';
import './App.css';
import './css/materialize.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types'
import Login from './components/Login'
import SessionsAdapter from './adapters/SessionsAdapter'
import Home from './components/Home'

class App extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor() {
    super()
    this.state ={
      currentUser: {},
      error:false
    }
  }

  componentDidMount() {
     SessionsAdapter.currentUser()
     .then(user => {
      this.setState({
        currentUser: user
      })
     })
   }


  renderLogin = () => {
    return <Login error={this.state.error} getUser={this.getUser} />
  }

  renderHome = () => {
    return <Home logOut={this.logOut} currentUser={this.state.currentUser} />
  }

  getUser = (user) => {
    return SessionsAdapter.getUser(user)
    .then( (userData) => {
      if(userData.error) {
        this.setState({
          error:true
        })
      } else {
        this.setState({
         currentUser: userData
       })
       localStorage.setItem('token', userData.jwt)
       this.context.router.history.push('/home')
      }
    })
  }

  logOut = () => {
    debugger
    this.setState({
      currentUser: {}
    })
    localStorage.token = ""
    this.context.router.history.push("/")
  }

  render() {
    return (
      <div className="App">
        {this.state.currentUser.firstname ?
          <div>
            <Route exact path="/" render={this.renderHome}/>
            <Route exact path="/home" render={this.renderHome}/>
          </div>
          :
          <Route exact path="/" render={this.renderLogin}/>  }
      </div>
    );
  }
}

export default App;