import React, { Component } from 'react';
import './App.css';
import './css/materialize.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types'
import Login from './components/Login'
import SessionsAdapter from './adapters/SessionsAdapter'
import Home from './components/Home'
import logo from './images/rockhurstlogo.png'

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
        <section className="nav z-depth-4">
    		<div className="container">
    		  <div className="logo-container">
    				<a href="https://rockhurstllc.herokuapp.com/index.html"><img src={logo}/></a>
            {this.state.currentUser.firstname ?
              <span className="login"><a onClick={this.logOut}>Logout</a>
            </span> : null }
    		  </div>
    		  <nav>
    			<div className="nav-wrapper">
    			  <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
    			  <ul className="center hide-on-med-and-down">
    				<li><a href="https://rockhurstllc.herokuapp.com/index.html">Home</a></li>
    				<li><a href="https://rockhurstllc.herokuapp.com/creating-values.html">Creating Values</a></li>
    				<li><a href="https://rockhurstllc.herokuapp.com/team.html">Team</a></li>
    				<li><a href="https://rockhurstllc.herokuapp.com/portfolio.html">Portfolio</a></li>
    				<li><a href="https://rockhurstllc.herokuapp.com/contact.html">Contact</a></li>
    				<li><a href="https://rockhurstllc.herokuapp.com/links.html">Links</a></li>
    			  </ul>
    			  <ul className="side-nav" id="mobile-demo">
    				<li><a href="https://rockhurstllc.herokuapp.com/index.html">Home</a></li>
    				<li><a href="https://rockhurstllc.herokuapp.com/creating-values.html">Creating Values</a></li>
    				<li><a href="https://rockhurstllc.herokuapp.com/team.html">Team</a></li>
    				<li><a href="https://rockhurstllc.herokuapp.com/portfolio.html">Portfolio</a></li>
    				<li><a href="https://rockhurstllc.herokuapp.com/contact.html">Contact</a></li>
    				<li><a href="https://rockhurstllc.herokuapp.com/links.html">Links</a></li>
    			  </ul>
    			</div>
    		  </nav>
    		</div>
    	</section>
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
