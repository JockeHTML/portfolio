import React, {useState} from 'react';
import styles from './SimpleMenu.module.css';
import {menuData} from "../Context/Context";

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
                    {menuData.map((data, index) => {
                        return (
                        <li key={index}>
                        <i className={data.icon}></i>
                        <a href={data.href} className={styles.SimpleMenuLinks}>{data.title}</a>
                    </li>)
                    })}
                    
                    
                </ul> : null }
            </div>
        </div>
  );
}

export default SimpleMenu;