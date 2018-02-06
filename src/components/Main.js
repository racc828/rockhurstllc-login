import React from 'react'
import TopMainNavigation from './TopMainNavigation'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Portfolio from './Portfolio'
import Partners from './Partners'
import MainHome from './MainHome'


export default class Main extends React.Component {



  render() {
    return(
      <div>
        <TopMainNavigation currentUser={this.props.currentUser} />
        <Tabs>
          <div className="top-nav z-depth-4">
             <TabList>
               <ul className="nav nav-tabs shadow-2dp h50">
                 <Tab>
                   <li>
                     <a className="withoutripple">Portfolio</a>
                   </li>
                 </Tab>
                 <Tab>
                   <li>
                     <a className="withoutripple">Partners</a>
                   </li>
                 </Tab>
              </ul>
             </TabList>
           </div>


         <TabPanel>
           <div className="container">
             <Portfolio />
           </div>
         </TabPanel>
         <TabPanel>
           <div className="container">
             <Partners />
           </div>
         </TabPanel>
       </Tabs>
      </div>
    )
  }
}
