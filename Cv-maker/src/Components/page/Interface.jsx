import React, { useState } from 'react'
import EduAcc from '../Input/EduAcc'
import GenralAcc from '../Input/GenralAcc'
import ProfAcc from '../Input/ProfAcc'
import Template from './Template'
import styles from '../style/Page.module.css'
function Interface() {

  const [genral,setGenral]=useState({
    'fullName':'',
    'email':'',
    'phNum':'',
    'cp':'',
    'lnk':'',
    'smry':'',
  })

  const [edu,setEdu]=useState([])

  const handleAdd=(newed)=>{
    setEdu((prev)=>[...prev,newed])
  }

  const handleSave=(newInfo)=>{
    setGenral(newInfo)
  }
  return (
    <>
        <div className={styles.container}>
          <div>
            <GenralAcc genInfo={genral} onSave={handleSave} />
            <EduAcc  onAdd={handleAdd}/>
            <ProfAcc/>
            </div>
            <Template genr={genral} eduIn={edu}/>
        </div>
    
    </>
  )
}

export default Interface