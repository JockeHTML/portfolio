import React, {useState} from 'react';
import styles from './SimpleMenu.module.css';

function SimpleMenu() {
 
  const [ sidebar, setSideBar ] = useState(false);

  const showSidebar = () => {
  setSideBar(!sidebar);}

  return (
        <div className={styles.wrapper}>
            <div className={sidebar ? styles.hamburgerActive : styles.hamburger}>
                <span onClick={showSidebar}>{sidebar ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}</span>
                {sidebar ? 
                <ul>
                    <li>
                        <i className="fas fa-home"></i>
                        <a href="#header" className={styles.SimpleMenuLinks}>HOME</a>
                    </li>
                    <li>
                        <i className="fas fa-question-circle"></i>
                        <a href="#section-one" className={styles.SimpleMenuLinks}>ABOUT</a>
                    </li>
                    <li>
                        <i className="fas fa-user-cog"></i>
                        <a href="#section-two" className={styles.SimpleMenuLinks}>SKILLS</a> 
                    </li>
                    <li>
                        <i className="fab fa-product-hunt"></i>
                        <a href="#section-three" className={styles.SimpleMenuLinks}>PROJECTS</a>
                    </li>
                    <li>
                        <i className="fas fa-info-circle"></i>
                        <a href="#section-five" className={styles.SimpleMenuLinks}>CONTACT</a>
                    </li>
                </ul> : null }
            </div>
        </div>
  );
}

export default SimpleMenu;

