import React from 'react';
import styles from './AboutAlt.module.css';

function Hobbies (props) {
    return (
        <div className={styles.aboutAltContainer}>
            <div className={styles.aboutAltImage}>
                <img alt="front-end" src='' />            
            </div>
            <div className={styles.aboutAltInfo}>
                <h1>Why Front-End?</h1>
                <h4>I started off taking a online course where i got to try both front and back-end. I have always had an eye for details and i am a perfectionist overall, so i got hooked pretty fast on the front-end side. Front-end has the upside of immediately see what you create, which for me gives me alot of joy and have kept me motivated to continue.</h4>
            </div>
        </div>
    );
}

export default Hobbies ;