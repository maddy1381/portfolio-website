import React, { useState, useRef } from "react";
import styles from "../component.css/FourthSection.module.css";
import Social from "./Social.js";
import signature from "../signature.png";
import emailjs from "emailjs-com";

const FourthSection = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ga8g5ai",
        "template_zb6webr",
        form.current,
        "user_5E31Z3OUATCJoB75A9Qa2"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("The Email was Sent");
        },
        (error) => {
          console.log(error.text);
          alert("OOPS.... Try Again");
        }
      );
    setName("");
    setEmail("");
    setText("");
  };

  return (
    <div className={styles.fourthSection}>
      <div className={styles.left}>
        <img src={signature} alt="signature" />
      </div>
      <div className={styles.right}>
        <h1 className={styles.contactHead}>Get In Touch</h1>
        <div className={styles.social}>
          {" "}
          <Social />{" "}
        </div>

        <form
          ref={form}
          method="POST"
          onSubmit={sendMail}
          className={styles.form}
        >
          <div className={styles.formControl}>
            <label className={styles.label} htmlFor="name">
              Name :{" "}
            </label>
            <input
              type="text"
              value={name}
              pattern="[a-zA-Z0-9 ]+"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              style={{ width: 240, height: 25, marginLeft: "50px" }}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.formControl}>
            <label className={styles.label} htmlFor="email">
              Email Address :{" "}
            </label>
            <input
              type="email"
              value={email}
              id="email"
              name="email"
              placeholder="Enter Email"
              style={{ width: 240, height: 25 }}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formControl}>
            <label className={styles.label} htmlFor="text">
              Your Message :{" "}
            </label>
            <textarea
              name="textarea"
              value={text}
              onChange={(e) => setText(e.target.value)}
              id="textarea"
              cols="30"
              rows="5"
              placeholder="What would you like to say?"
              required
            ></textarea>
          </div>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default FourthSection;
