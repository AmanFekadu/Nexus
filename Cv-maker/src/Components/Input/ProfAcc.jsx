
import React, { useState } from 'react'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { faSquareMinus } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import styles from '../style/ProfAcc.module.css'

function ProfAcc({onSave, onAdd}) {
    const [active,setActive]=useState(false)
    const initalForm={
        'jT':'',
        'cmp':'',
        'ct':'',
        'cnt':'',
        'srt':'',
        'end':'',
        'desc':''
    }
    const [fomData,setFormData]=useState(initalForm)

    
        const handleClick=()=>{
            setActive((prev)=>!prev)
        }

        const handleChange=(e)=>{
      const {name,value}=e.target
      const update={...fomData,[name]:value}
      setFormData(update)
      onSave(update)
     
    }
     const handleSubmit=(e)=>{
      e.preventDefault()
      onAdd()
      setFormData(initalForm)
      e.target.reset()
    }
  return (
    <div className={styles.container}>
    
            <h2 onClick={handleClick}> <FontAwesomeIcon icon={faBriefcase} />  Professional Experiance<FontAwesomeIcon icon={ active? faSquareMinus:faSquarePlus} /> </h2>
           
            <form className={ active? styles.form : styles.hidden} onSubmit={handleSubmit}>
                        <h3>Job title</h3>
                        <input className={styles.input} type="text" name='jT' onChange={handleChange} placeholder='Enter Job title'/> <br />
                        <h3>Company</h3>
                        <input className={styles.input} type="text"  placeholder='Enter Company' name='cmp' onChange={handleChange} />
                        <h3>City</h3>
                        <input type="text" className={styles.input} placeholder='insert city' name='ct' onChange={handleChange} />
                        <h3>Country</h3>
                        <input type="text" className={styles.input} placeholder='insert Country' name='cnt' onChange={handleChange} />
    
                        <div className={styles.div}>
                            <div>
                                <h3>Start Date</h3>
                                <input type="date" name='srt' onChange={handleChange}  />
                            </div>
                            <div>
                                <h3>End Date</h3>
                                <input type="date" name='end' onChange={handleChange}  />
                            </div>
                            <h3>Description</h3>
                            <textarea id="" placeholder='Main tasks' className={styles.input} name='desc' onChange={handleChange}  ></textarea>
                        </div>
                        <button className={styles.btn}>Save</button>
                     </form>
        </div>
  )
}

export default ProfAcc