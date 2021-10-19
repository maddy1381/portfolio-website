import React from "react";
import styles from "../component.css/Skills.module.css";
import FlipCards from "./FlipCards.js";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

function Skills() {
  return (
    <section className={styles.parent}>
      <header className={styles.header}>
        Skills
        <p>( Click or Hover to see more :) )</p>
      </header>
      <div className={styles.flipCards}>
        <FlipCards icon={<FaHtml5 />} heading="HTML 5" level="Intermediate" />
        <FlipCards icon={<FaCss3Alt />} heading="CSS 3" level="Intermediate" />
        <FlipCards
          icon={<SiJavascript />}
          heading="JavaScript"
          level="Intermediate"
        />
        <FlipCards icon={<FaReact />} heading="React" level="Beginner" />
      </div>
    </section>
  );
}

export default Skills;
