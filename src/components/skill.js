import React from "react";
import Border from "./Border";
import EachSkill from "./EachSkill";
import background from "../img/background.svg"

export default function Skills() {
    let style = {
        backgroundImage: `url(${background})`,
    }
    return(
        <div className="skills" style={style} id="Skills">
            <div className="skillstitle ">
                <h1 className="titleofparts">My Skills</h1>
            </div>
                <Border />
                <EachSkill />
        </div>
    )
}