import './About.css';
import { Element } from 'react-scroll';

import nathan_img from '../assets/images/nathan_img.jpg';

const About= () => {
    return (
        <Element id='about'>
            <div className='about-section'>
             <div className='about-text'>
                <h1 className='about-me'>About Me</h1>
                    <h1 className='inner-about-text'>
                    I'm Nathan, and I graduated from UC Irvine in 2024 with a B.S. in Informatics 
                    specializing in Human-Computer Interaction. 
                    </h1>
                    <h1 className='inner-about-text'>
                    Through exposure to project teams and hackathons, I am passionate about working
                    with others in creating something new and meaningful. In the future, I aspire to 
                    be a technical program manager.
                    </h1>
                    <h1 className='inner-about-text'>
                    In my free time, I enjoy bouldering, trying out new restaurants and cafes, and 
                    meeting new people!
                    </h1>
             </div>
             <img src={nathan_img} id='nathan-img' alt='pic-of-me'/>
            </div>
        </Element>
    )
}

export default About;