import React, { Component } from "react";
import styles from "../component.css/Navbar.module.css";
// import { Link } from "react-router-dom";
// import { BsDownload } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";

function Navbar(props) {
  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          {/* <Link className={styles.link} to="/~a1632iqo">Home</Link>
                         <Link className={styles.link} to="/about">About</Link>
                         <Link className={styles.link} to="/project">Project</Link>
                         <Link className={styles.link} to="/contact">Contact</Link> */}
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Project</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          {/* <li style={{float: 'right'}}><em> <a href="../../Resume.pdf" download>Download Resume</a></em></li> */}
        </ul>
      </nav>

      <div className={styles.hamburger}>
        <nav>
          {/* <div className={styles.hamIcon} ><BiMenu onClick={props.drawerClickHandler} /></div> */}
          <BiMenu
            className={styles.hamIcon}
            onClick={props.drawerClickHandler}
          />
        </nav>
      </div>
    </>
  );
}

export default Navbar;
