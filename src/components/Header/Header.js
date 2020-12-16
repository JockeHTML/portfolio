import React from 'react';
import styles from './Header.module.css';

function Header(props) {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerDiv}>
                <h1>Hello, i'm Joakim</h1>
                <h4>A self taught web developer</h4>
            </div> 
            <div className={styles.imageDiv}>
                <img className={styles.headerImage} src="" alt=""/>
            </div>
            <div className={styles.iconDiv}>
            <a href="#section-one"><i className="fas fa-lg fa-arrow-circle-down"></i></a>
            </div> 
        </div>
    );
}

export default Header;