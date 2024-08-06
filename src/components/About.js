import './About.css';
import { Element } from 'react-scroll';

import nathan_img from '../assets/images/nathan_img.jpg';

const About= () => {
    return (
        <Element id='about'>
            <div className='about-section'>
             <div>
                <h1>
                 My name is Nathan Nguyen   
                </h1>
             </div>
             <img src={nathan_img} id='nathan-img' alt='pic-of-me'/>
            </div>
        </Element>
    )
}

export default About;