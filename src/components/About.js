import './About.css';
import { Element } from 'react-scroll';

// function About() {
//     return <div className='about'>
//        <div className='about-section'>
//         About
//        </div>
//     </div>
// }

const About= () => {
    return (
        <Element id='about'>
            <div className='about-section'>
             About
            </div>
        </Element>
    )
}

export default About;