import React, { useState } from 'react'
import styles from '../style/Template.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faLocationPin} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
function Template({genr}) {
    
  return (
    <div className={styles.container}>
         <div className={styles.head}>
            <h3 style={{color:'white'}}>{genr.fullName} </h3>
            <div className={styles.lks}>
          {genr.email && <h2 style={{color:'white'}}><FontAwesomeIcon style={{color:'white'}} icon={faEnvelope}/>{genr.email} </h2>}  
           {genr.phNum && <h2 style={{color:'white'}}><FontAwesomeIcon style={{color:'white'}} icon={faPhone}/> {genr.phNum}</h2>} 
           {genr.cp && <h2 style={{color:'white'}}><FontAwesomeIcon style={{color:'white'}} icon={faLocationPin}/> {genr.cp}</h2> } 
           {genr.lnk &&  <h2 style={{color:'white'}}><FontAwesomeIcon style={{color:'white'}} icon={faLinkedin}/> {genr.lnk}</h2>
            }
            </div>
         </div>

         <div>
          {genr.smry && <div> 

            <p> Professional Summary</p>
          </div>
            }
         </div>
    </div>
  )
}

export default Template