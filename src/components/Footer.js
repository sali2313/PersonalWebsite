import React from "react";
import contactaliData from "../contactaliData";

export default function Contact() {
    return(
        
            <div className="boxofconact " id="contact">
                <h2 className="socialtext">Social Media</h2>
                <div className="contactways">
                {contactaliData.map((eachcontact) => {
                    return(
                     <div className="contact " >
                         <a href={eachcontact.refrence}><img src={eachcontact.image}/></a>
                     </div>   
                    )
                })}
                </div>
            </div>
    )
}