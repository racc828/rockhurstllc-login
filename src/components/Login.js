import React from 'react'
import logo from '../images/rockhurstlogo.png'

export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = (e) => {
    let property = e.target.name
    let value = e.target.value
    this.setState({
      [property]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let user = this.state
    this.props.getUser(user)
  }


  render() {
    return(
      <div>
        <div className="container login-container">
            <div className="login-box">
              <div className="z-depth-3">
                <h5 className="center-align"> Login </h5>
                <form className="login-form" onSubmit={this.handleSubmit}>
                  <input name="email" type="email" placeholder="email" onChange={this.handleChange} />
                  <input name="password" type="password" placeholder="password" onChange={this.handleChange} />
                  <div className="right-align">
                    <button className="waves-effect waves-light btn" type="submit">Sign In</button>
                  </div>
                </form>
                {this.props.error ?
                  <p className="error">Invalid email or password </p> : null
                }
              </div>
            </div>
        </div>
      </div>
    )
  }

}
