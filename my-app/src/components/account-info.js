import React from "react";
import TabComponent from "./account-tab";


function AccountInfo() {
    return(
        <div className="account-box">
            <h1>Hello Tam</h1>
            <h2>Have a nice day at work </h2>
        
            <div className="tabcomponentbox">
            <TabComponent/>
            </div>
        </div>
    )
}

export default AccountInfo;