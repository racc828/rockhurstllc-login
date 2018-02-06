import React from 'react'
import document1 from '../pdf/document1.pdf'
import document2 from '../pdf/document2.pdf'
import document3 from '../pdf/document3.pdf'
import document4 from '../pdf/document4.pdf'
import document5 from '../pdf/document5.pdf'
import Main from './Main'

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
        <Main currentUser={this.props.currentUser} />
      </div>
    )
  }

}
