import React, { Component } from "react";
import styles from "../component.css/Social.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

class Social extends Component {
  render() {
    return (
      <div className={styles.icons}>
        <a href="https://github.com/maddy1381" className={styles.github}>
          {" "}
          <FaGithub />{" "}
        </a>
        <a
          href="https://www.instagram.com/madhav_sharma138/"
          className={styles.insta}
        >
          {" "}
          <FaInstagram />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/Madhav Sharma/"
          className={styles.linkedin}
        >
          {" "}
          <FaLinkedin />{" "}
        </a>
        <a
          style={{ color: "white", paddingLeft: 15 }}
          href="./Resume.pdf"
          download
        >
          <BsDownload />
        </a>
      </div>
    );
  }
}

export default Social;
