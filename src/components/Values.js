import data from "../dataaboutali"
import Border from "./Border"

export default function Values() {
    return(
        <div id="values" className="values ">
        <h1 className="abouttextvalues titleofparts">
        My Values
        </h1>
        <Border />
        <div className="alivalues">
        {data.map(eachdata => {
            return (
                <div className="eachvalue">
                    <img src={eachdata.url} className="imageabout"/>
                    <span className="title">{eachdata.title}</span>
                    <span className="textbelowtitle" >{eachdata.text}</span>
                </div>
            )
        })}
        </div></div>
    )            
}