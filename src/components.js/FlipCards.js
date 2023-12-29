import React from "react";
import styles from "../component.css/FlipCards.module.css";

function FlipCards(props) {
  return (
    <div>
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            {/* <img src={<FaHtml5/>} alt="Avatar" /> */}
            {props.icon}
          </div>
          <div className={styles.flipCardBack}>
            <h1>{props.heading}</h1>
            <p>Experience: {props.experience}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCards;
