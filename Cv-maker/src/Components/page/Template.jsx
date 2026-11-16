import React, { useState } from 'react'
import styles from '../style/Template.module.css'
function Template({genr}) {
    
  return (
    <div className={styles.container}>
         <div className={styles.head}>
            <h3 style={{color:'white'}}>{genr.fullName} </h3>
            <h2 style={{color:'white'}}>{genr.email} </h2>
            <h2 style={{color:'white'}}>{genr.phNum}</h2>
            <h2 style={{color:'white'}}>{genr.cp}</h2>

         </div>
    </div>
  )
}

export default Template