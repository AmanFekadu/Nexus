import React, { useState } from 'react'
import styles from '../style/Template.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faLocationPin} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
function Template({genr,eduIn}) {
    
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

         <div className={styles.prf}>
          {genr.smry && <div> 

            <h3> Professional Summary</h3>
            <p>{genr.smry}</p>
          </div>
            }
         </div>

        <div className={styles.edu}>
          {eduIn.length > 0 && (
            <div>
              <h3>Education</h3>
              {eduIn.map((item, index) => (
                <div key={index} className={styles.edbx}>
                  <div>
                    <h4 style={{fontWeight:'normal'}}>{item.strt} - {item.end}</h4>
                    <h4 style={{fontWeight:'normal'}}>{item.ct}, {item.cnt}</h4>
                  </div>
                  <div>
                    <h4 >{item.sch}</h4>
                    <h4 style={{fontWeight:'normal'}}>{item.deg}</h4>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
    </div>
  )
}

export default Template