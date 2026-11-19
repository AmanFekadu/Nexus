import React, { useState } from 'react'
import styles from '../style/Template.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faLocationPin} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
function Template({genr,eduIn,prfIn}) {
    
  return (
    <div className={styles.container}>
         <div className={styles.head}>
            <h3 style={{color:'white', fontSize:'xx-large'}}>{genr.name} </h3>
            <div className={styles.lks}>
          {genr.email && <h2 style={{color:'white'}}><FontAwesomeIcon style={{color:'white'}} icon={faEnvelope}/>{genr.email} </h2>}  
           {genr.phone && <h2 style={{color:'white'}}><FontAwesomeIcon style={{color:'white'}} icon={faPhone}/> {genr.phone}</h2>} 
           {genr.location && <h2 style={{color:'white'}}><FontAwesomeIcon style={{color:'white'}} icon={faLocationPin}/> {genr.location}</h2> } 
           {genr.linkedin &&  <h2 style={{color:'white'}}><FontAwesomeIcon style={{color:'white'}} icon={faLinkedin}/> {genr.linkedin}</h2>
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
             {/* <h4 style={{fontWeight:'normal'}}>{item.strt} - {item.end ? {item.end}:'present' }</h4>     would this work */}
              <h3>Education</h3>
              {eduIn.map((item, index) => (
                <div key={index} className={styles.edbx}>
                  <div>
                    <h4 style={{fontWeight:'normal'}}>{item.strt} {item.end ?  `-${item.end}`:'-present'}</h4>
                    <h4 style={{fontWeight:'normal'}}>{item.location}</h4>
                  </div>
                  <div>
                    <h4 >{item.school}</h4>
                    <h4 style={{fontWeight:'normal'}}>{item.deg}</h4>
                    <h4 style={{ fontWeight: 'normal' }}>{item.field ? ` - ${item.field}` : ''}
</h4>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          {prfIn.length>0 &&
            <div className={styles.edu}>
              <h3>Professional Experience</h3>
              {prfIn.map((item,index)=>(
                <div key={index} className={styles.edbx}>
                  <div>
                    <h4 style={{fontWeight:'normal'}}>{item.srt} - {item.end}</h4>
                    <h4 style={{fontWeight:'normal'}}>{item.ct},{item.cnt}</h4>
                  </div>
                  <div>
                    <h4>{item.cmp}</h4>
                    <p style={{fontWeight:'normal'}}>{item.desc}</p>
                  </div>

                </div>
              ))}
            </div>
          }
        </div>
    </div>
  )
}

export default Template