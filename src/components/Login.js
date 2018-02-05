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
        <div class="bg-full-page ms-hero-bg-dark back-fixed">
      <div class="mw-500 absolute-center">
        <div class="card color-dark shadow-6dp animated fadeIn animation-delay-7">
          <div class="ms-hero-bg-primary ">
            <h2 class="text-center no-m pt-4 pb-4 color-white index-1">Rockhurst Login</h2>
          </div>
          <div class="card-block">
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane fade active in" id="ms-login-tab">
                <form onSubmit={this.handleSubmit}>
                  <fieldset>
                    <div class="form-group label-floating">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <i class="zmdi zmdi-account"></i>
                        </span>
                        <label class="control-label" for="ms-form-user">Email</label>
                        <input name="email" type="email"  onChange={this.handleChange} class="form-control" />
                      </div>
                    </div>
                    <div class="form-group label-floating">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <i class="zmdi zmdi-lock"></i>
                        </span>
                        <label class="control-label" for="ms-form-pass">Password</label>
                        <input type="password" class="form-control" name="password" type="password"  onChange={this.handleChange}/> </div>
                    </div>
                    <div class="row ">
                      <div class="col-xs-7">
                        <button class="btn btn-raised btn-primary pull-right">Login</button>
                        {this.props.error ?
                          <p className="error">Invalid email or password </p> : null
                        }
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center animated fadeInUp animation-delay-7">
          <a href="https://rockhurstllc.herokuapp.com/index.html" class="btn btn-white">
            <i class="zmdi zmdi-home"></i> Go Home</a>
        </div>
      </div>
    </div>
        {/* <div className="container login-container">
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
        </div> */}
      </div>
    )
  }

}
