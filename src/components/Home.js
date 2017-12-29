import React from 'react'
import document1 from '../pdf/document1.pdf'
import document2 from '../pdf/document2.pdf'
import document3 from '../pdf/document3.pdf'

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
          <div className="main-body">
            <h5>Welcome {this.props.currentUser.firstname}</h5>
            <a href={document1}> BLS Investors Fund II unit Purchase Agreement and Amended and Restated Limited Liabnility Company Agreement</a> <br/>
            <a href={document2}> Rockhurst LLC Cover Letter and Schedule</a> <br/>
            <a href={document3}>Signature Pages, Accredited Investor Questionnaire and Investor Contact Information Form</a>
          </div>
        </div>
      </div>
    )
  }

}
