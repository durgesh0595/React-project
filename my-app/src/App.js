import React from "react";
import './App.css';
import SearchBox from "./components/search";
import AccountInfo from "./components/account-info";
import Card from "./components/card";
import List from "./components/list";
import Menu from "./components/menu";

function App() {

  const divRef = React.useRef(null);
  const iconRef = React.useRef(null);
  const iconRef1 = React.useRef(null);
  const menutoggleClick = (e) => {
    divRef.current.classList.toggle("active");
    iconRef.current.classList.toggle("show");
    iconRef1.current.classList.toggle("cross-show"); 
  };
  return (
    <div className="App">
<div className="appinterface">
  <div className="appball ball1"></div>
  <div className="appball ball2"></div>
  <div className="appball ball3"></div>
  <div className="appleft">
  </div>
  <div className="appright"></div>
  <div className="interfacebox">
    <div className="interfaceleft" ref={divRef}>
      <Menu/>
    </div>
    <div className="interfaceright">
    <i className="fa fa-bars" aria-hiden="true"  ref={iconRef} onClick={menutoggleClick}></i>
    <i className="fa fa-times" aria-hiden="true" ref={iconRef1} onClick={menutoggleClick}></i>
    <SearchBox/>
    
    <div className="contentseperator">
    <div className="contentleft">
        <AccountInfo/>
    </div>
    <div className="contentright">
      <Card/>
      <List/>
      </div>  
    </div>
    </div>
  </div>
</div>
      
   </div>
  );
}




export default App;


