import React from "react";
import styles from "../component.css/Reviews.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Reviews({ users, index, nextUser, prevUser }) {
  const { id, fullName, title, body, image } = users[index];
  return (
    <>
      <button className={styles.btn} onClick={() => prevUser()}>
        <FaChevronLeft />
      </button>
      <div className={styles.card}>
        <div className={styles.container}>
          <img src={image} alt="user image" />
          {/* <h1>{title}</h1> */}
          <p>{body}</p>
          <blockquote>By {fullName}, {title}</blockquote>
        </div>
      </div>
      <button className={styles.btn} onClick={() => nextUser()}>
        <FaChevronRight />
      </button>
    </>
  );
}

export default Reviews;
