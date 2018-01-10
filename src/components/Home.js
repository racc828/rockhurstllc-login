import React from 'react'
import document1 from '../pdf/document1.pdf'
import document2 from '../pdf/document2.pdf'
import document3 from '../pdf/document3.pdf'
import document4 from '../pdf/document4.pdf'
import document5 from '../pdf/document5.pdf'

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
      <div className="home container">
        {this.state.loading ? <div className="loader-container"><div className="loader"></div></div> : null }
        <h5>Welcome {this.props.currentUser.firstname}</h5>
        <div class="card z-depth-2 grey-bg">
					<div class="row">
						<div class="container">
							<div>
                <ul>
                  <li><a href={document1}> BLS Investors Fund II unit Purchase Agreement and Amended and Restated Limited Liabnility Company Agreement</a><a href={document1} download><i className="fa fa-download"></i></a></li>
                  <li><a href={document2}> Rockhurst LLC Cover Letter and Schedule</a><a href={document2} download><i className="fa fa-download"></i></a></li>
                  <li><a href={document3}>Signature Pages, Accredited Investor Questionnaire and Investor Contact Information Form</a><a href={document3} download><i className="fa fa-download"></i></a></li>
                  <li><a href={document4}>January 2018 Distribution Notice</a><a href={document4} download><i className="fa fa-download"></i></a></li>
                  <li><a href={document5}>Ren's Q2 FY2018 Investor Letter</a><a href={document5} download><i className="fa fa-download"></i></a></li>
                </ul>
							</div>
						</div>
					</div>
				</div>
      </div>
    )
  }

}
