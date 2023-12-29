// import React,{ Component } from 'react';
import styles from "../component.css/IntroRight.module.css";
import Typewriter from "typewriter-effect";

// class IntroRight extends Component {
//   render(){

//     return (
//       <div className="intro-right">
//         <h1>right Side</h1>
//       </div>
//     );
//   }

// }

import React, { useState } from "react";

const IntroRight = () => {
  const [state] = useState({
    title: "Greetings.",
    titleTwo: "I'm",
    titleThree: "Madhav",
  });

  return (
    <div>
      <div className={styles.introRight}>
        <h2>
          <div className={styles.title}>{state.title}</div>
        </h2>
      </div>
      <div className={styles.text}>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 40,
            strings: [
              "My name is Madhav Sharma",
              "Full stack web Developer.",
              "",
              ,
            ],
          }}
        />
      </div>
      {/* </div> */}
    </div>
  );
};
export default IntroRight;
