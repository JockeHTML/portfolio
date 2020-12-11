import React, {useState} from 'react';
import styles from './Projects.module.css';

function Projects(props) {
    const [ hoverOne, setHoverOne ] = useState(false);
    const [ hovertwo, setHoverTwo ] = useState(false);
    const [ hoverThree, setHoverThree ] = useState(false);
    const [ hoverFour, setHoverFour ] = useState(false);

    return (
        <div className={styles.projectsContainer}>
            <div className={styles.projectsHeading}>
                <h1>My recent projects</h1>
                <h4>These are a few of my projects i have built on my later part of learning to code. I have gotten inspiration from both guides and videos, but put a personal touch on it.</h4>
            </div>
            <div className={styles.projects}>
                <div id="1" 
                    onMouseEnter={() => setHoverOne(true)} 
                    onMouseLeave={() => setHoverOne(false)}
                    className={hoverOne ? styles.hover : styles.movie}>
                    {hoverOne ? <h4>Search for your movie, and get information card.</h4> : null}
                    {hoverOne ? <div className={styles.links}><a href="https://github.com/JockeHTML/movie-project">GITHUB</a> <a href="https://joakim-movie-project.herokuapp.com">DEMO</a></div> : <h2>MOVIE APP</h2>}
                </div> 
                <div id="2" 
                    onMouseEnter={() => setHoverTwo(true)} 
                    onMouseLeave={() => setHoverTwo(false)}
                    className={hovertwo ? styles.hover : styles.weather}>
                    {hovertwo ? <h4>Get todays weather and forecast for your city.</h4> : null}
                    {hovertwo ? <div className={styles.links}><a href="https://github.com/JockeHTML/weather-project">GITHUB</a> <a href="https://joakim-weather-project.herokuapp.com">DEMO</a></div> : <h2>WEATHER APP</h2>}
                </div> 
                 <div id="3" 
                    onMouseEnter={() => setHoverThree(true)} 
                    onMouseLeave={() => setHoverThree(false)}
                    className={hoverThree ? styles.hover : styles.todo}>
                    {hoverThree ? <h4>Add to do notes for choosen day</h4> : null}
                    {hoverThree ? <div className={styles.links}><a href="https://github.com/JockeHTML/todo-project">GITHUB</a> <a href="https://joakim-todo-project.herokuapp.com">DEMO</a></div> : <h2>TO DO APP</h2>}
                </div> 
                <div id="4" 
                    onMouseEnter={() => setHoverFour(true)} 
                    onMouseLeave={() => setHoverFour(false)}
                    className={hoverFour ? styles.hover : styles.covid}>
                    {hoverFour ? <h4>Find covid-19 stats for your and other countries.</h4> : null}
                    {hoverFour ? <div className={styles.links}><a href="https://github.com/JockeHTML/covid-project">GITHUB</a> <a href="https://joakim-covid-project.herokuapp.com">DEMO</a></div> : <h2>COVID APP</h2>}
                </div>
            </div>

        </div>
    );
}

export default Projects;