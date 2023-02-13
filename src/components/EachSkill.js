import dataofskills from "../dataOfSkills"
import keyboardimg from "../img/keyboard.png"

export default function EachSkill() {
    return(
        <div className="allskills">
            {dataofskills.map(eachdataofskills => {
                let eachpercentage = eachdataofskills.percentage;
                let finaldescribe = eachpercentage == "33%" ? "beginner" : eachpercentage == "66%" ? "intermediate" : "excellent" ;

                return(
                <div className="eachskill">
                    <div className="describeeachskill">
                    <span className="eachdataofskillsname" >{eachdataofskills.name}</span> 
                    {/* <span className="finaldescribe">{finaldescribe}</span> */}
                    </div>
                    <div className="mainbar">
                        <div className="secondarybar" style={{width:`${eachdataofskills.percentage}`}}></div>
                    </div>
                </div>
                )
            })}

            <img src={keyboardimg} className="imageofskills"></img>
        </div>
    )
    


}

// excellent - intermediate - begginer