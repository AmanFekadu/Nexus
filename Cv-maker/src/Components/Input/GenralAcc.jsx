import React, { useState } from 'react'
import styles from '../style/GenralAcc.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { faSquareMinus } from '@fortawesome/free-regular-svg-icons'
function GenralAcc({genInfo,onSave}) {
    const [active,setActive] =useState(true)

    const[formData,setFormData]=useState(genInfo)

    const handleClick=()=>{
        setActive((prev)=>!prev)
    }

    const handleChange=(e)=>{
      const {name,value}=e.target
      const updated={...formData,[name]:value}
      setFormData(updated)
      
      onSave(updated)
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      onSave(formData)
    }

  return (
    <div className={styles.container}>
        
         <h2 onClick={handleClick}> <FontAwesomeIcon icon={faUser} />  General Information <FontAwesomeIcon icon={ active? faSquareMinus:faSquarePlus} /> </h2>

         <form className={ active? styles.form : styles.hidden} onSubmit={handleSubmit}>
            <h3>Full Name</h3>
            <input className={styles.input} type="text" required placeholder='Abebe Kebede' value={formData.name} name='name' onChange={handleChange}/> <br />
            <h3>Email</h3>
            <input className={styles.input} type="email" required placeholder='abebekebe34@gmail.com' value={formData.email} name='email' onChange={handleChange}/> <br />
            <h3>Phone Number</h3>
            <input className={styles.input} type="tel" required placeholder='0911111111' value={formData.phone} name='phone' onChange={handleChange}/>
            <h3>City and Province</h3>
            <input className={styles.input} type="text" placeholder='Addis Ababa, Ethiopia' value={formData.location} name='location'  onChange={handleChange} required/>
            <h3>Linkedln</h3>
            <input type="text" className={styles.input} name='linkedin' value={formData.linkedin} onChange={handleChange} />
            <h3>Professional Summary</h3>
            <textarea  className={styles.input} value={formData.smry} name='smry' onChange={handleChange}></textarea>
            <button className={styles.btn} type='submit'>Save</button>
         </form>
            

         
    </div>
  )
}

export default GenralAcc