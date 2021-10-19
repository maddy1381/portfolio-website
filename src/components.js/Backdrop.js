import React from 'react';
import styles from '../component.css/backdrop.module.css'

function Backdrop(props) {
     
     return (
          <div className={styles.backdrop} onClick={props.click}>
               
          </div>
     )
}

export default Backdrop
