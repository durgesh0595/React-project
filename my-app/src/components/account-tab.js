import React, { Component } from 'react';
import tab1 from '../images/placeholder.jpg';
// ====================================================================================
//  this is to display the single component only

class TabComponent extends React.Component {
  render(){
    return(
      <div className="tabs sep-padbox">
          <div className='extrabox'>
             <span></span>
             <span></span>
             <span></span>
         </div>
       <Tabs>
       
         <Tab label="Your Pro">
           <div className='tab-image'>
             <img src={tab1}/>
           </div>
           <div className='tab-content-acc'>
               <div className='tab-content-left'>
                   <span className='contentspan'></span>
                   <p>Renew Your Pro Account <span>$99.00 for an additional year</span>    </p>
               </div>
               <div className='tab-content-right'>
                    <button className='renew'>Renew Account</button>
                </div>            
            </div> 
          </Tab>
         <Tab label="Your Portfolio">
           <div className='tab-image'>
           <img src={tab1}/>
           </div>
           <div className='tab-content-acc'>
               <div className='tab-content-left'>
                   <span className='contentspan'></span>
                   <p>Renew Your Pro Account <span>$99.00 for an additional year</span>    </p>
               </div>
               <div className='tab-content-right'>
                    <button className='renew'>Renew Account</button>
                </div>            
            </div> 
         </Tab>

        
       </Tabs>
      </div>
      
    )
  }
}

class Tabs extends React.Component{
  state ={
    activeTab: this.props.children[0].props.label
  }
  changeTab = (tab) => {
    this.setState({ activeTab: tab });
  };
  render(){
    
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, child =>{
          buttons.push(child.props.label)
          if (child.props.label === this.state.activeTab) content = child.props.children
        })}
         
        <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
        <div className="tab-content">{content}</div>
        
      </div>
    );
  }
}

const TabButtons = ({buttons, changeTab, activeTab}) =>{
   
  return(
    <div className="tab-buttons">
    {buttons.map(button =>{
       return <button className={button === activeTab? 'active': ''} onClick={()=>changeTab(button)}>{button}</button>
    })}
    </div>
  )
}

const Tab = props =>{
  return(
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}
export default TabComponent;

 // ====================================================================================