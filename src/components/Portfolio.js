import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Exits from './Exits'
import DirectCo from './DirectCo'
import PEFunds from './PEFunds'

export default class Portfolio extends React.Component {
  render() {
    return(
      <div>
        <Tabs>
          <div className="card port-tabs">
            <div className="row">
              <div className="col-md-3 ms-paper-menu-left-container">
                <h5 className="left-header text-center">
                  Portfolio
                </h5>
              </div>
              <div className="col-md-9 tabs-cont ms-paper-content-container">
                 <TabList>
                   <ul className="nav nav-tabs ml-0">
                     <Tab>
                       <li className="tab-list-i">
                         <a className="withoutripple">PE Funds Only</a>
                       </li>
                     </Tab>
                     <Tab>
                       <li className="tab-list-i">
                         <a className="withoutripple">Direct Co Investments</a>
                       </li>
                     </Tab>
                     <Tab>
                       <li className="tab-list-i">
                         <a className="withoutripple">Exits</a>
                       </li>
                     </Tab>
                   </ul>
                 </TabList>
               </div>
             </div>
          </div>

         <TabPanel>
           <PEFunds />
         </TabPanel>
         <TabPanel>
           <DirectCo />
         </TabPanel>
         <TabPanel>
           <Exits />
         </TabPanel>
       </Tabs>
      </div>
    )
  }
}
