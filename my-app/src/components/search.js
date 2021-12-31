import React from "react";

function SearchBox() {
    return(
        <div className="searchbox">
            <div className="searchfield">
                <input type="text" placeholder="Search" />
                <span className="icon"><i className="fa fa-search" aria-hidden="true"></i></span>  
            </div>
            <div className="icondoc">  <span className="counter">2</span>    <i class="fa fa-file-o" aria-hidden="true"></i></div>
            <div className="iconshield"><i class="fa fa-shield" aria-hidden="true"></i></div>    
        </div>
    )
} 

export default SearchBox;