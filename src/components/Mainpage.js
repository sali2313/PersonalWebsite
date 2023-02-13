import First from './First';
import Navbar from "./Navbar"
import Values from './Values';
import About from './About';
import Skills from './skill';
import Project from './projects';


export default function MainPage() {
    return(
        <div>
        <Navbar />
        <First/>
        <About />
        <Values />
        <Skills />
        <Project /> 
        </div>
    )
}