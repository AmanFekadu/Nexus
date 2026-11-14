import React, { useState } from 'react'
import styles from './GenralAcc.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { faSquareMinus } from '@fortawesome/free-regular-svg-icons'
function GenralAcc() {
    const [active,setActive] =useState(true)

    const handleClick=()=>{
        setActive((prev)=>!prev)
    }
  return (
    <div className={styles.container}>
        
         <h2 onClick={handleClick}> <FontAwesomeIcon icon={faUser} />  General Information <FontAwesomeIcon icon={ active? faSquareMinus:faSquarePlus} /> </h2>

         <form className={ active? styles.form : styles.hidden}>
            <h3>Full Name</h3>
            <input className={styles.input} type="text" required placeholder='Abebe Kebede'/> <br />
            <h3>Email</h3>
            <input className={styles.input} type="email" required placeholder='abebekebe34@gmail.com' /> <br />
            <h3>Phone Number</h3>
            <input className={styles.input} type="tel" required placeholder='0911111111'/>
            <h3>City and Province</h3>
            <input className={styles.input} type="text" placeholder='Addis Ababa, Ethiopia' />
            <button className={styles.btn}>Save</button>
         </form>
            

         
    </div>
  )
}

export default GenralAcc