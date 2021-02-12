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
                <p>I started off taking a online course where i got to try both front and back-end. I like to think i have an eye for details so i got hooked pretty fast on the front-end side. Front-end has the upside of immediately see what you create, which gives me alot of joy and have kept me motivated to continue.</p>
            </div>
        </div>
    );
}

export default Hobbies ;