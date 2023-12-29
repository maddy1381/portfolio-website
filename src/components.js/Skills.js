import React from "react";
import styles from "../component.css/Skills.module.css";
import FlipCards from "./FlipCards.js";
import { FaHtml5, FaJava, FaNodeJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiRedux, SiTypescript, SiSpring, SiMongodb, SiMysql, SiElasticsearch, SiGrafana, SiPrometheus, SiApachekafka   } from "react-icons/si";

function Skills() {
  return (
    <section className={styles.parent}>
      <header className={styles.header}>
        Skills
        <p>( Click or Hover to see more :) )</p>
      </header>
      <div className={styles.flipCards}>
        <FlipCards icon={<FaHtml5 />} heading="HTML 5" experience="3 years" />
        <FlipCards icon={<FaCss3Alt />} heading="CSS 3" experience="3 years" />
        <FlipCards
          icon={<SiJavascript />}
          heading="JavaScript"
          experience="3 years"
        />
        <FlipCards icon={<FaReact />} heading="React.js" experience="3 years" />
        <FlipCards icon={<SiRedux />} heading="Redux" experience="3 years" />
        <FlipCards icon={<SiTypescript />} heading="TypeScript" experience="2+ years" />
        <FlipCards icon={<FaJava />} heading="Java" experience="2+ years" />
        <FlipCards icon={<FaNodeJs />} heading="Node.js" experience="2+ years" />
        <FlipCards icon={<SiSpring  />} heading="Spring Boot" experience="2+ years" />
        <FlipCards icon={<SiMongodb />} heading="MongoDB" experience="2+ years" />
        <FlipCards icon={<SiMysql />} heading="MySQL" experience="1+ years" />
        <FlipCards icon={<SiElasticsearch />} heading="Elastic Search" experience="1+ years" />
        <FlipCards icon={<SiGrafana />} heading="Grafana" experience="1+ years" />
        <FlipCards icon={<SiPrometheus />} heading="Prometheus" experience="1+ years" />
        <FlipCards icon={<SiApachekafka />} heading="Kafka" experience="1+ years" />
      </div>
    </section>
  );
}

export default Skills;
