import React from 'react'

export default class Home extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div className="home">
        <div className="container">
          <div className="right-align">
            <button className="waves-effect waves-light btn" onClick={this.props.logOut} type="submit">Logout</button>
          </div>
          <div className="main-body">
            <h5>Welcome {this.props.currentUser.firstname}</h5>
          </div>
        </div>
      </div>
    )
  }

}
