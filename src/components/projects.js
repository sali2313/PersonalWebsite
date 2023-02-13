import React from "react";
import projects from "../myprojects"
import Border from "./Border";
import upflash from "../img/upflash.svg"


export default function Project() {
   

    return(
        <div className="allProjectsandtext"  id="projects">
            <span className="titleofparts">My Projects</span>
            <Border />
        <div className="allProjects" >
            {projects.map((eachproject) => {
                return(
                    <div className="eachproject">
                        <img src={eachproject.img} className="imageofproject"/>
                        <div className="textsofproject">
                        <h3 className="h3ofproject">{eachproject.name}</h3>
                        <h4 className="h4ofproject">{eachproject.information}</h4>
                        <a className="download moreaboutproject" href={eachproject.link} download>More</a>
                        </div>
                    </div>
                )
            })}
        </div>
        <a href="#firstpage"><img src={upflash} className="upflash"></img></a>
        </div>
    )
}