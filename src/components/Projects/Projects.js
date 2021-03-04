import React, { useState } from "react";
import styles from "./Projects.module.css";

function Projects(props) {
  const [hoverOne, setHoverOne] = useState(false);
  const [hoverTwo, setHoverTwo] = useState(false);
  const [hoverThree, setHoverThree] = useState(false);
  const [hoverFour, setHoverFour] = useState(false);
  const [hoverFive, setHoverFive] = useState(false);
  const [hoverSix, setHoverSix] = useState(false);

  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectsHeading}>
        <h1>My projects</h1>
        <p>
          Here are a few of my latest projects i have made during the later part
          of learning to code. My inspiration often comes from guides and other
          real life apps, then i make them my own.{" "}
        </p>
      </div>
      <div className={styles.projects}>
        <div
          id={styles.projectSix}
          onMouseEnter={() => setHoverSix(true)}
          onMouseLeave={() => setHoverSix(false)}
          className={hoverSix ? styles.hover : styles.seDack}
        >
          {hoverSix ? <h4>Website made for a friends company.</h4> : null}
          {hoverSix ? (
            <div className={styles.links}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/JockeHTML/se-dack"
              >
                GITHUB
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://se-dack.netlify.app/"
              >
                DEMO
              </a>
            </div>
          ) : (
            <h2>SE DÄCKSERVICE</h2>
          )}
        </div>
        <div
          id={styles.projectOne}
          onMouseEnter={() => setHoverFive(true)}
          onMouseLeave={() => setHoverFive(false)}
          className={hoverFive ? styles.hover : styles.mestKunskap}
        >
          {hoverFive ? (
            <h4>Website made for a client with a small business.</h4>
          ) : null}
          {hoverFive ? (
            <div className={styles.links}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/JockeHTML/mest-kunskap"
              >
                GITHUB
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://mestkunskap.netlify.app/"
              >
                DEMO
              </a>
            </div>
          ) : (
            <h2>MEST KUNSKAP</h2>
          )}
        </div>
        <div
          id={styles.projectTwo}
          onMouseEnter={() => setHoverTwo(true)}
          onMouseLeave={() => setHoverTwo(false)}
          className={hoverTwo ? styles.hover : styles.weather}
        >
          {hoverTwo ? (
            <h4>Get todays weather and forecast for your city.</h4>
          ) : null}
          {hoverTwo ? (
            <div className={styles.links}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/JockeHTML/weather-project"
              >
                GITHUB
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://joakim-weather-project.herokuapp.com"
              >
                DEMO
              </a>
            </div>
          ) : (
            <h2>WEATHER APP</h2>
          )}
        </div>
        <div
          id={styles.projectThree}
          onMouseEnter={() => setHoverThree(true)}
          onMouseLeave={() => setHoverThree(false)}
          className={hoverThree ? styles.hover : styles.todo}
        >
          {hoverThree ? (
            <h4>Shopping site, shoe information and more.</h4>
          ) : null}
          {hoverThree ? (
            <div className={styles.links}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/JockeHTML/shoppingCart-project"
              >
                GITHUB
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://joakim-shopping-project.herokuapp.com"
              >
                DEMO
              </a>
            </div>
          ) : (
            <h2>SHOPPING APP</h2>
          )}
        </div>
        <div
          id={styles.projectFour}
          onMouseEnter={() => setHoverFour(true)}
          onMouseLeave={() => setHoverFour(false)}
          className={hoverFour ? styles.hover : styles.covid}
        >
          {hoverFour ? (
            <h4>Covid-19 stats for your and other countries.</h4>
          ) : null}
          {hoverFour ? (
            <div className={styles.links}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/JockeHTML/covid-project"
              >
                GITHUB
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://joakim-covid-project.herokuapp.com"
              >
                DEMO
              </a>
            </div>
          ) : (
            <h2>COVID APP</h2>
          )}
        </div>
        <div
          id={styles.projectOne}
          onMouseEnter={() => setHoverOne(true)}
          onMouseLeave={() => setHoverOne(false)}
          className={hoverOne ? styles.hover : styles.movie}
        >
          {hoverOne ? (
            <h4>Search for your movie, info card and more.</h4>
          ) : null}
          {hoverOne ? (
            <div className={styles.links}>
              <a href="https://github.com/JockeHTML/movie-project">GITHUB</a>
              <a href="https://joakim-movie-project.herokuapp.com">DEMO</a>
            </div>
          ) : (
            <h2>MOVIE APP</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
