
import React, { useState } from 'react'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { faSquareMinus } from '@fortawesome/free-regular-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import styles from './ProfAcc.module.css'

function ProfAcc() {
    const [active,setActive]=useState(false)
    
        const handleClick=()=>{
            setActive((prev)=>!prev)
        }
  return (
    <div className={styles.container}>
    
            <h2 onClick={handleClick}> <FontAwesomeIcon icon={faBriefcase} />  Professional Experiance<FontAwesomeIcon icon={ active? faSquareMinus:faSquarePlus} /> </h2>
           
            <form className={ active? styles.form : styles.hidden}>
                        <h3>Job title</h3>
                        <input className={styles.input} type="text" placeholder='Enter Job title'/> <br />
                        <h3>Company</h3>
                        <input className={styles.input} type="text"  placeholder='Enter Company'/>
    
                        <div className={styles.div}>
                            <div>
                                <h3>Start Date</h3>
                                <input type="date" />
                            </div>
                            <div>
                                <h3>End Date</h3>
                                <input type="date" />
                            </div>
                            <h3>Description</h3>
                            <textarea name="" id="" placeholder='Main tasks' className={styles.input} ></textarea>
                        </div>
                        <button className={styles.btn}>Save</button>
                     </form>
        </div>
  )
}

export default ProfAcc