import React,{ Component } from 'react';
import styles from '../component.css/ThirdSection.module.css'
import Card from './Card.js';
import MealImage from '../MealImage-compressed.png';
import GitHubPic from '../GitHubPic.png';
import realtimeeditor from '../realtimeeditor.jpg'
import spotifyLogo from '../Spotify_App_Logo.svg.webp'
import twitterLogo from '../Logo_of_Twitter.svg.webp'


class ThirdSection extends Component {
  render(){
       
    return (
      <>
      <div className={styles.thirdSection}>
        <div className={styles.projectHeader}>
          <h1 >Projects</h1>
        </div>
        
        <div className={styles.projectCard}>
          <div className={styles.projectCardContainer}>
            <h1>Projects</h1>
            <p>Defines a <span>Person.</span></p>
          </div>
        </div>
      
      <div className={styles.thirdSectionCard}>
        <Card className={styles.card} src={realtimeeditor} title="Real Time Code Editor" description="Developed a real-time collaborative code editor using React and Express, featuring WebSocket integration for instantaneous code sharing in private rooms and a secure user authentication system. Improved cross-functional collaboration, conducted testing, and documented the development process for enhanced reliability." link="https://github.com/maddy1381/code-editor" live="https://realtime-code-editor-lhy6duno1-madhav-sharmas-projects.vercel.app/"  />

        <Card className={styles.card} src={spotifyLogo} title="Spotify Clone" description="Built a Spotify clone using React, Firebase, and the Spotify API, delivering a dynamic user interface with features like music playback and user profiles. Leveraged Firebase for secure user authentication, database management, and real-time updates, ensuring an immersive music streaming experience." link="https://github.com/maddy1381/spotify-clone" live="https://maddy1381.github.io/spotify-clone/" />

        <Card className={styles.card} title="Twitter Clone" src={twitterLogo} description="Crafted a Twitter clone with React, Firebase, and the Twitter API, offering a responsive user interface mirroring original functionalities. Integrated Firebase for robust user authentication, database management, and real-time updates, providing a seamless and engaging social media experience." link="https://github.com/maddy1381/twitter-clone" live="https://maddy1381.github.io/twitter-clone/" />
        <Card className={styles.card} title="Recipe for your Ingredients" src={MealImage} description="Developed a recipe discovery application using vanilla JavaScript and external APIs, allowing users to input ingredients and receive comprehensive recipes with step-by-step instructions. Integrated YouTube API to enhance user experience with video tutorials for each recipe, fostering a seamless and interactive cooking resource." link="https://github.com/maddy1381/meal-for-your-ingredients" live="https://maddy1381.github.io/meal-for-your-ingredients/" />
        <Card className={styles.card} title="Github Profile Finder" src={GitHubPic} description="Designed and implemented a GitHub profile search front-end using HTML, CSS, and JavaScript, leveraging the GitHub API. Empowered users to explore and retrieve detailed profiles, repositories, and contributions seamlessly, enhancing the accessibility and visibility of GitHub user information." link="https://github.com/maddy1381/githubFinder" live="https://maddy1381.github.io/githubFinder/" />
        </div>
      </div>
      </>
    );  
  }
 
}

export default ThirdSection;