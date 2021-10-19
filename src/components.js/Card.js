import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../component.css/Cards.module.css";

class Card extends Component {
  render() {
    return (
      <>
        {/* <a href={this.props.live} target="_blank"> */}
        <div className={styles.card}>
          <img
            src={this.props.src}
            alt="Preview Pic"
            className={styles.image}
          />
          <div className={styles.container}>
            <h4>
              <b>{this.props.title}</b>
            </h4>
            <p>{this.props.description}</p>
            <a href={this.props.link} target="_blank" rel="noreferrer">
              Repo Link
            </a>
            <div className={styles.liveBtn}>
              <a href={this.props.live} target="_blank" rel="noreferrer">
                Live Preview
              </a>
            </div>
          </div>
        </div>
        {/* </a> */}
      </>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
};

Card.defaultProps = {
  title: "Missing",
  link: "https://maddy1381.github.com/",
  description: "Waiting for description",
};

export default Card;
