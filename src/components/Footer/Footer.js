import React from 'react';
import styles from "./Footer.module.css"

function Footer(props) {
    return (
        <div  className={styles.footerContainer}>
            <div className={styles.links}>
                <a rel="noreferrer" target="_blank" href="https://github.com/JockeHTML"><i className="fab fa-md fa-github"></i></a>
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/joakim-andersson-3551851b0/"><i className="fab fa-md fa-linkedin-in"></i></a>
            </div>
            <div className={styles.copyright}>
                <p>COPYRIGHT©2021 <span>JOAKIM ANDERSSON</span> ALL RIGHTS RESERVED</p>
            </div>
            
        </div>
    );
}

export default Footer;