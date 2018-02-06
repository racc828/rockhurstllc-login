import React, { Component } from 'react';
import './App.css';
import './css/global.css';
import './css/animate.css';
import './css/plugins.min.css';
import './css/red.css';
import './css/style.css';
import './css/style2.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types'
import Login from './components/Login'
import SessionsAdapter from './adapters/SessionsAdapter'
import Home from './components/Home'
import logo from './images/rockhurstlogo.png'
import Header from './components/Header'

class App extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor() {
    super()
    this.state ={
      currentUser: {},
      error:false,
      loading:false
    }
  }

  componentDidMount() {
     SessionsAdapter.currentUser()
     .then(user => {
       debugger
      this.setState({
        currentUser: user,
        loading:false
      })
    })
   }


  renderLogin = () => {
    return <Login error={this.state.error} getUser={this.getUser} />
  }

  renderHome = () => {
    return <Home currentUser={this.state.currentUser} />
  }

  getUser = (user) => {
    this.setState({
      loading:true
    })
    return SessionsAdapter.getUser(user)
    .then( (userData) => {
      debugger
      if(userData.error) {
        this.setState({
          error:true
        })
      } else {
        this.setState({
         currentUser: userData,
         error:false
       })
       localStorage.setItem('token', userData.jwt)
       this.context.router.history.push('/home')
      }
    })
    .then(() => {
      this.setState({
        loading:false
      })
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
        <Header logOut={this.logOut} currentUser={this.state.currentUser} />
        {this.state.loading ? <div className="loader-container"><div className="loader"></div></div> : null }
        {this.state.currentUser.firstname ?
          <div>
            <Route exact path="/" render={this.renderHome}/>
            <Route exact path="/home" render={this.renderHome}/>
          </div>
          :
          <div>
            <Route exact path="/" render={this.renderLogin}/>
            <Route exact path="/home" render={this.renderLogin}/>
          </div>
            }
      </div>
    );
  }
}

export default App;
