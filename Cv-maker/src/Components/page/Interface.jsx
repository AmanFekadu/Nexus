import React from 'react'
import EduAcc from '../Input/EduAcc'
import GenralAcc from '../Input/GenralAcc'
import ProfAcc from '../Input/ProfAcc'
import Template from './Template'
import styles from '../style/Page.module.css'
function Interface() {
  return (
    <>
        <div className={styles.container}>
          <div>
            <GenralAcc/>
            <EduAcc/>
            <ProfAcc/>
            </div>
            <Template/>
        </div>
    
    </>
  )
}

export default Interface