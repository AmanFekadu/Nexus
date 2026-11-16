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
    'smry':'',
  })

  const handleSave=(newInfo)=>{
    setGenral(newInfo)
  }
  return (
    <>
        <div className={styles.container}>
          <div>
            <GenralAcc genInfo={genral} onSave={handleSave} />
            <EduAcc/>
            <ProfAcc/>
            </div>
            <Template genr={genral}/>
        </div>
    
    </>
  )
}

export default Interface