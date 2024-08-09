import './Home.css';

import Container from 'react-bootstrap/Container';
import Typewriter from 'typewriter-effect';
import { scroller } from 'react-scroll';

import landing_img from '../assets/images/landing_img.png';

const Home = () => {

    const typewriterTexts = <Typewriter
    options={{
        strings: [
            'Hello there!', 
            'Nice to meet you.', 
            "I'm Nathan.", 
            "I graduated from UC Irvine (zot zot zot).", 
            'I studied Informatics!',
            "I enjoy learning and working with others!",
            'I also enjoy working on my foodie list.',
            "I'm just a small fan of stars.",
            'Thanks for stopping by!',
        ],
        autoStart: true,
        loop: true,
    }}
    />

    return (
        <div className='home'>
            <div className='home-section'>
                <Container>
                    <div className='land-child'>
                        <img src={landing_img} id='land-image' alt='funny-ponyo'/>
                        <div className='land-text'>
                            <h1 className='land-name'>Nathan Nguyen</h1>
                            <p className='typewriter-text'>{typewriterTexts}</p>
                        </div>
                    </div>
                    <a 
                    href='#about' 
                    className='arrow-down'
                    onClick={() => scroller.scrollTo('about', {
                        smooth: true,
                        offset: -100,
                        duration: 500,
                    })}> </a>
                </Container>
            </div>
        </div>
    )
};

export default Home;