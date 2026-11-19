import React, { useState } from 'react'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { faSquareMinus } from '@fortawesome/free-regular-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../style/EduAcc.module.css'
function EduAcc({ eduIn,onAdd}) {

    const initialForm = {
      deg: '',
      school: '',
      field: '',
      location: '',
      strt: '',
      end: '',
    }
   
    const [active,setActive]=useState(false)
    const [formData,setFormData]=useState(initialForm)
    const handleClick=()=>{
        setActive((prev)=>!prev)
    }

    const handleChange=(e)=>{
      const {name,value}=e.target
      const update={...formData,[name]:value}
      setFormData(update)
      eduIn(update)
     
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      onAdd()
      setFormData(initialForm)
      e.target.reset()
    }


  return (
    <div className={styles.container}>

        <h2 onClick={handleClick}> <FontAwesomeIcon icon={faGraduationCap} />  Education Experiance<FontAwesomeIcon icon={ active? faSquareMinus:faSquarePlus} /> </h2>
       
        <form className={ active? styles.form : styles.hidden} onSubmit={handleSubmit}>
                    <h3>Degree</h3>
                    <input className={styles.input} type="text" placeholder='Honor of degree' name='deg' value={formData.deg} onChange={handleChange}/> <br />
                    <h3>School</h3>
                    <input className={styles.input} type="text" placeholder='Enter school/university' name='school' value={formData.school} onChange={handleChange} /> <br />
                    <h3>Field</h3>
                    <input className={styles.input} type="text"  placeholder='Enter ypur filed' name='field' value={formData.field} onChange={handleChange}/>
                    <h3>Country</h3>
                    <input className={styles.input} type="text" placeholder='Enter country' name='location' value={formData.location} onChange={handleChange} />

                    <div className={styles.div}>
                        <div>
                            <h3>Start Date</h3>
                            <input type="date" name='strt' value={formData.strt} onChange={handleChange} />
                        </div>
                        <div>
                            <h3>End Date</h3>
                            <input type="date" name='end' value={formData.end} onChange={handleChange} />
                        </div>
                    </div>
                    <button className={styles.btn} type='submit'>Save</button>
                 </form>
    </div>
  )
}

export default EduAcc