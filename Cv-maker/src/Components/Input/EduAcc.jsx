import React, { useState } from 'react'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { faSquareMinus } from '@fortawesome/free-regular-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../style/EduAcc.module.css'
function EduAcc({onAdd}) {
    const initialForm = {
  deg: '',
  sch: '',
  ct: '',
  cnt: '',
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
      setFormData((prev)=>({
        ...prev,[name]:value
      }))
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      onAdd(formData)
      setFormData(initialForm)
      e.target.reset()
    }


  return (
    <div className={styles.container}>

        <h2 onClick={handleClick}> <FontAwesomeIcon icon={faGraduationCap} />  Education Experiance<FontAwesomeIcon icon={ active? faSquareMinus:faSquarePlus} /> </h2>
       
        <form className={ active? styles.form : styles.hidden} onSubmit={handleSubmit}>
                    <h3>Degree</h3>
                    <input className={styles.input} type="text" placeholder='Field of study' name='deg' onChange={handleChange}/> <br />
                    <h3>School</h3>
                    <input className={styles.input} type="text" placeholder='Enter school/university' name='sch' onChange={handleChange} /> <br />
                    <h3>City</h3>
                    <input className={styles.input} type="text"  placeholder='Enter city' name='ct' onChange={handleChange}/>
                    <h3>Country</h3>
                    <input className={styles.input} type="text" placeholder='Enter country' name='cnt' onChange={handleChange} />

                    <div className={styles.div}>
                        <div>
                            <h3>Start Date</h3>
                            <input type="date" name='strt' onChange={handleChange} />
                        </div>
                        <div>
                            <h3>End Date</h3>
                            <input type="date" name='end' onChange={handleChange} />
                        </div>
                    </div>
                    <button className={styles.btn} type='submit'>Save</button>
                 </form>
    </div>
  )
}

export default EduAcc