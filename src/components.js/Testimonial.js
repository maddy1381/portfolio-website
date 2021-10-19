import React, { useState, useEffect } from "react";
import styles from "../component.css/Testimonial.module.css";
import Reviews from "./Reviews.js";
import usersArray from "../data.js";

function Testimonial() {
  const [index, setIndex] = useState(0);
  const [users, setUser] = useState(usersArray);
  // console.log(users);

  // const getUser = async () => {
  //      const res = await fetch('http://localhost:8000/users');
  //      const data = await res.json();
  //      setUser(data)
  //      // console.log(data);
  // }

  // useEffect(() => {
  //      getUser();
  // }, []);

  const checkNumber = (number) => {
    if (number > users.length - 1) {
      return 0;
    }
    if (number < 0) {
      return users.length - 1;
    }
    return number;
  };

  const nextUser = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevUser = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <>
      <div className={styles.bigDiv}>
        <div className={styles.heading}>
          <h1>Testimony</h1>
        </div>

        {/* Mapping through the array user (previous setup) */}
        {/* {users.map((user) => {
                    const {id, fullName, title, body} = user;
                    return (
                    <>
                    <div key={id} className={styles.parent}>
                         <div className={styles.card}>
                              <div className={styles.container}>
                                   <h1>{title}</h1>
                                   <p>{body}</p> 
                                   <blockquote>By {fullName}</blockquote>
                              </div>
                         </div>
                    </div> 
                    </>
                    );
               })} */}
        <div className={styles.reviews}>
          {users.length === 0 ? (
            "nothing"
          ) : (
            <Reviews
              users={users}
              index={index}
              nextUser={nextUser}
              prevUser={prevUser}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Testimonial;
