import React, { Component } from "react";
import styles from "../component.css/Social.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

class Social extends Component {
  render() {
    return (
      <div className={styles.icons}>
        <a href="https://github.com/maddy1381" className={styles.github}>
          {" "}
          <FaGithub />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/Madhav Sharma/"
          className={styles.linkedin}
        >
          {" "}
          <FaLinkedin />{" "}
        </a>
        <a
          // style={{ color: "white", paddingLeft: 15 }}
          className={styles.email}
          href="./Madhav-Sharma-Resume.pdf"
          download
        >
          <BsDownload />
        </a>
        <a className={styles.email} href="mailto:ms1381598@gmail.com?subject=Subject%20Here&body=Hello%20World!"><HiOutlineMail /></a>
      </div>
    );
  }
}

export default Social;
