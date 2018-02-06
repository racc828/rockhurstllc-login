import React from 'react'

export default class Header extends React.Component {
  constructor() {
    super()

  }

  render() {
    return(
      <section className="nav">
        <div>
          <header className="ms-header ms-header-dark">
          <div className="container container-full">
            <div className="ms-title">
              <a href="index.html">
                <h1 className="animated fadeInRight animation-delay-6">
                  <span>Rockhurst, LLC.</span>
                </h1>
              </a>
            </div>
            <div className="header-right">
              {this.props.currentUser.firstname ?
                  <button className="logout"><a onClick={this.props.logOut}>Logout</a>
                </button> : null }
            </div>
          </div>
        </header>
        </div>
    	</section>
    )
  }


}
