import React from 'react'

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      loading:true
    }
  }

  componentDidMount() {
    this.setState({
      loading:false
    })
  }

  render() {
    return(
      <div className="home">
        {this.state.loading ? <div className="loader-container"><div className="loader"></div></div> : null }
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
