import React from "react";
import background from "../img/background.svg"
import cv from "../img/AliSalehi-eng.pdf"

export default function First(){
    let style = {
        backgroundImage: `url(${background})`,
    }
    
    return (
        <div className="firstpage" style={style} id="firstpage">
      
        <div className="lineOne firstpagetext" >
        <div>
            <h2>
                Hello, I'm <span className="name">Ali Salehi</span>.
            </h2>
            <h1>
                I'm a Front-end web developer
            </h1>
        </div>
            
                <a className="download" href={cv} download>Download My CV
            </a>
        </div>  
        </div>
    ) 
}