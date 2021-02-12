import React from 'react';
import styles from './About.module.css';

function About(props) {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutInfo}>
                <h1>Who am I?</h1>
                <p>Im a self taught web developer, focusing fully on front-end. At the start of 2020 i decided to leave my current job and pursue a career in coding. I have always had an interest for technology and computers so it felt natural to try get into the IT business.</p>
            </div>
            <div className={styles.aboutImage}>
                <img alt="about" src='' />            
            </div>
        </div>
    );
}

export default About;