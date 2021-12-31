import React from "react";

function Card(){
    return(
        <div className="earnbox">
            <div className="earn">Your Earning</div>
        
            <div className="earntool">
                <div className="earnimage">
                    <div className="earnimgbox"></div>
                </div>
                <div className="earndollar">
                     <p><sup>$</sup>98.00</p>
                     <p> <span className="pink"></span> Graphics</p>                           
                     <p> <span className="purple"> </span> Interfaces</p>
                </div>
                <div className="dollarbg">
                    <div className="dollarfirst"></div>
                    <div className="dollarlast"></div>
                </div>
            </div>

            <div className="earntoolbox">
                <div className="earnbest">
                    <div className="earntitle">
                        Your Best Month
                    </div>
                    <div className="earncard">
                        <div className="earnicon">
                            <div className="eicon"></div>
                        </div>
                        <div className="earncontent">
                            $24.89
                            <span>February</span>
                        </div>
                        <div className="earndot earntooldot">
                            <div className="earnspec">
                            <span></span>
                            <span></span>
                            <span></span>
                            </div>
                        </div>
                    </div>
   
                </div>

                <div className="earnbest">
                <div className="earntitle">
                        Your Best Tool
                    </div>
                <div className="earncard earnpurple">
                    <div className="earnicon">
                    <div className="eicon"></div>
                    </div>
                        <div className="earncontent">
                            $24.89
                            <span>February</span>
                    </div>
                    <div className="earndot">
                        </div>
                </div>    
                </div>
            </div>
        </div>
        
    )
}

export default Card;