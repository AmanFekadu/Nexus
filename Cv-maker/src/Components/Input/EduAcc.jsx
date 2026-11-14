import React, { useState } from 'react'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { faSquareMinus } from '@fortawesome/free-regular-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../style/EduAcc.module.css'
function EduAcc() {
    const [active,setActive]=useState(false)

    const handleClick=()=>{
        setActive((prev)=>!prev)
    }
  return (
    <div className={styles.container}>

        <h2 onClick={handleClick}> <FontAwesomeIcon icon={faGraduationCap} />  Education Experiance<FontAwesomeIcon icon={ active? faSquareMinus:faSquarePlus} /> </h2>
       
        <form className={ active? styles.form : styles.hidden}>
                    <h3>Degree</h3>
                    <input className={styles.input} type="text" placeholder='Field of study'/> <br />
                    <h3>School</h3>
                    <input className={styles.input} type="text" placeholder='Enter school/university' /> <br />
                    <h3>City</h3>
                    <input className={styles.input} type="text"  placeholder='Enter city'/>
                    <h3>Country</h3>
                    <input className={styles.input} type="text" placeholder='Enter country' />

                    <div className={styles.div}>
                        <div>
                            <h3>Start Date</h3>
                            <input type="date" />
                        </div>
                        <div>
                            <h3>End Date</h3>
                            <input type="date" />
                        </div>
                    </div>
                    <button className={styles.btn}>Save</button>
                 </form>
    </div>
  )
}

export default EduAcc