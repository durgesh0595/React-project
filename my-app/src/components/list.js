import React from "react";

function List(){
return(
          <div className="top-item-box">
              <div className="top-title">Your Top Item</div>
          
            <div className="top-list-box">
                <div className="first-list">
                    <div className="first-template">
                        product
                    </div>
                    <div className="sec-template">
                        Earning
                    </div>
                </div>
                <ul className="template-list-box">
                    <li>
                        <div className="templatebox">
                            <div className="template-icon">
                                <div className="template-icon-image"></div>
                            </div>
                            <div className="template-content">
                                <p>Thefox 6 template</p> 
                                <span>Sketch App</span>
                                <div className="temp-value">+16.9%</div>  
                            </div>
                            <div className="template-price">
                                $19.63
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="templatebox">
                            <div className="template-icon">
                                <div className="template-icon-image temp-pink-image"></div>
                            </div>
                            <div className="template-content">
                                <p>Dashboard Interface</p> 
                                <span>Sketch App</span>
                                <div className="temp-value">+16.9%</div>  
                            </div>
                            <div className="template-price">
                                $19.63
                            </div>
                        </div>
                    </li>
                </ul> 
            </div>
          </div>  
    )
}

export default List;