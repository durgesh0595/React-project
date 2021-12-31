import React from "react";

function Menu(){
    return(
        <div className="menubox">
        <div className="menu-title">
           <h1 className="title">Interface</h1>
           <span className="Menuimage"></span> 
       </div> 
       <div className="menulistbox">
           <ul>
               <li>
                   <div className="menuicon">
                       <div className="menuiconimage"></div>
                   </div>
                   <div className="menucontent">Dashboard</div>
               </li>
               <li>
                   <div className="menuicon">
                       <div className="menuiconimage"></div>
                   </div>
                   <div className="menucontent">Profile</div>
               </li>
               <li>
                   <div className="menuicon">
                       <div className="menuiconimage"></div>
                   </div>
                   <div className="menucontent">Setting</div>
               </li>
               <li>
                   <div className="menuicon">
                       <div className="menuiconimage"></div>
                   </div>
                   <div className="menucontent">Cloud</div>
               </li>
               <li>
                   <div className="menuicon">
                       <div className="menuiconimage"></div>
                   </div>
                   <div className="menucontent">Message</div>
               </li>
           </ul>
       </div>
       <div className="menuitembox">
       <ul className="menuitemboxlist">
               <li>
                   <div className="menuicon">
                       <div className="menuiconimage"></div>
                   </div>
                   <div className="menucontent">New Item</div>
            </li>
            <p>Click '+' to create <span className="plus">your new items</span></p>
       </ul>
       </div>

       </div>
    )
}

export default Menu;