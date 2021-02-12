import React from 'react';
import styles from './Skills.module.css';
import cx from 'classnames';

function Skills(props) {
    return (
        <div className={styles.skillsContainer}>
            <div className={styles.skills}>
                <div className={styles.skillsInfo}>
                    <h1>Tech skills</h1>
                    <p>These are the most used skills in my coding. Because i focus on front-end i picked up React as soon as i got the basics from HTML, CSS and JS. Im also learning to use framworks such as Material UI to speed up my styling and coding process.</p>
                </div>
                <ul>
                    <li><span><i className={cx(styles.one, "fab fa-lg fa-html5")}></i></span></li>
                    <li><span><i className={cx(styles.two, "fab fa-lg fa-css3-alt")}></i></span></li>
                    <li><span><i className={cx(styles.five, "fa-lg fab fa-js-square")}></i></span></li>
                    <li><span><i className={cx(styles.three, "fab fa-lg fa-react")}></i></span></li>
                </ul>
            </div>
        </div>
    );
}

export default Skills;