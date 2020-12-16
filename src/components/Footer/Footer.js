import React from 'react';
import styles from "./Footer.module.css"

function Footer(props) {
    return (
        <div  className={styles.footerContainer}>
            <div className={styles.links}>
                <a href="https://github.com/JockeHTML"><i className="fab fa-md fa-github"></i></a>
                <a href="https://www.linkedin.com/in/joakim-andersson-3551851b0/"><i className="fab fa-md fa-linkedin-in"></i></a>
            <div className={styles.copyright}>
                <p>JOAKIM ANDERSSON © 2020</p>
            </div>
            </div>
        </div>
    );
}

export default Footer;