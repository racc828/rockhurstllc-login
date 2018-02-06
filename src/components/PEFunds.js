import React from 'react'

export default class PEFunds extends React.Component {
  render() {
    return(
      <div>
        <div class="ms-paper">
          <div className="row">
            <div className="col-md-3 ms-paper-menu-left-container">
              <div className="ms-paper-menu-left">
                <h5 className="ms-paper-menu-title">
                  By Sector
                </h5>
                <div className="panel-menu collapse" >
                  <ul className="panel-group ms-collapse-nav" id="components-nav" >
                    <li className="panel">
                      <a  className="collapsed withripple">
                       Aging - Assisted Living </a>
                    </li>
                    <li className="panel">
                      <a class="collapsed withripple">
                         Analytics, AI/ML </a>
                    </li>
                    <li className="panel">
                      <a  class="collapsed withripple">
                        Automated Retail</a>
                    </li>
                    <li className="panel">
                      <a  class="collapsed withripple">
                        Buyout - Large Cap China</a>
                    </li>
                    <li className="panel">
                      <a  class="collapsed withripple">
                        Life Science</a>
                    </li>
                    <li className="panel">
                      <a  class="collapsed withripple">
                        Product Innovation</a>
                    </li>
                    <li className="panel">
                      <a  class="collapsed withripple">
                        Retail - store based</a>
                    </li>
                    <li className="panel">
                      <a  class="collapsed withripple">
                        SAS (Software as Service)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9 ms-paper-content-container">
              <div className="ms-paper-content">
                <section className="ms-component-section">
                  <h2 className="section-title no-margin-top">PE Funds </h2>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
