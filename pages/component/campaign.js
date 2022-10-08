import React from "react";
import Campaigncmp from "./campaigncmp";
import link1 from "../images/img_1.svg";
import link2 from "../images/img_2.svg";
import link3 from "../images/img_3.svg";
import link4 from "../images/img_4.svg";
import underline from "../images/extra/underline.png"
import Image from "next/image";
function Campaign() {
    return (
        <div>
            <div className="temp" style={{
                maxWidth: "max-content",
            }}>
                <span  className="fs-1">
                    <strong>Result-oriented</strong></span>
                <div className="col-md-8">
                <Image className="ps-2" src={underline} style={{maxWidth: "fit-content"}} ></Image>
                </div>
                
                </div>
                <h2 className="fs-1">performance campaigns
                <br /> for every objective</h2>
            
            <div className="row" >
                <div className="col-md-6">
                    <Campaigncmp imglink={link1} t="Self-serve platform with CPI starting at INR 1"></Campaigncmp>

                </div>
                <div className="col-md-6">
                    <Campaigncmp imglink={link2} t="Access to premium inventory and exposure to 5K+ apps" ></Campaigncmp>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Campaigncmp imglink={link3} t="Comprehensive reporting and insights into campaign performance"></Campaigncmp>
                </div>
                <div className="col-md-6">
                    <Campaigncmp imglink={link4} t="Campaigns for every need - clicks, installs, impressions, and more"></Campaigncmp>
                </div>
            </div>

        </div>
    )

}

export default Campaign
