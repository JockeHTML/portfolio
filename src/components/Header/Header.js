import React from "react";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerText}>
        <h1>Hello, i'm Joakim</h1>
<<<<<<< HEAD
        <h2>Slutliga git test!</h2>

        <h3>A self taught web developer</h3>
=======
        <h3>A self taught web developer</h3>
        <h3>Testing GIT on my-new-branch version2!</h3>
>>>>>>> my-test-branch
      </div>
      <div className={styles.imageDiv}>
        <img className={styles.headerImage} src="" alt="" />
      </div>
      <div className={styles.iconDiv}>
        <a href="#section-one">
          <i className="fas fa-lg fa-arrow-circle-down"></i>
        </a>
      </div>
    </div>
  );
}

export default Header;
