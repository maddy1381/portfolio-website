import React,{ Component } from 'react';
import styles from '../component.css/ThirdSection.module.css'
import Card from './Card.js';
import MealImage from '../MealImage-compressed.png';
import GitHubPic from '../GitHubPic.png';


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
        <Card className={styles.card} src={MealImage} title="Meals For Your Ingeredients" description="This is a vanilla javascript project where you can get the recipe for the ingredient that you have entered in the input field." link="https://github.com/maddy1381/meal-for-your-ingredients/" live="https://maddy1381.github.io/meal-for-your-ingredients/"  />

        <Card className={styles.card} src={GitHubPic} title="Github Profile Finder" description="This is a Vanilla javascript api project that uses github's api to fetch userdata and displays the details about the user you want to search." link="https://github.com/maddy1381/githubFinder" live="https://maddy1381.github.io/githubFinder/" />

        <Card className={styles.card} title="Club Website" src='https://spectrumcet.com/assets/mozclub%20logo.png' description="This is a practice website of my college club." link="https://github.com/maddy1381/sid-task1" live="https://maddy1381.github.io/sid-task1/" />
        </div>
      </div>
      </>
    );  
  }
 
}

export default ThirdSection;