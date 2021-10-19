import React, { Component } from "react";
import styles from "../component.css/SecondLeft.module.css";

class SecondLeft extends Component {
  render() {
    return (
      <div className={styles.secondLeft}>
        <h1>About Me</h1>
        <h3 className={styles.text}>
          My name is Madhav Sharma I'm an aspiring Front End Engineer based in
          India ☀️. I describe myself as a passionate developer who loves coding
          and the web platform ❤️.
        </h3>
      </div>
    );
  }
}

export default SecondLeft;
