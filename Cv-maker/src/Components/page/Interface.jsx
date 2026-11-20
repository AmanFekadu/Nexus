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
  const [prf,setPrf]=useState([])
  const [cvData,setSvData]=useState({
    personal:{
      name:'',
      email:'',
      phone:'',
      location:'',
      linkedin:'',
      smry:''
    },
    education:[],
    expr:[],
    skills:[],
  })
  
  const [activeEduId, setActiveEduId] = useState(null)
  const [activeProfId,setActiveProfId] = useState(null)

  const handleEduChange = (updatedFields) => {
  if (!activeEduId) {
    const newId = Date.now()
    setActiveEduId(newId)
    setSvData((prev) => ({
      ...prev,
      education: [...prev.education, { ...updatedFields, id: newId }],
    }))

  } else {
    setSvData((prev) => ({
      ...prev,
      education: prev.education.map((item) =>
        item.id === activeEduId ? { ...item, ...updatedFields } : item
      ),
    }))
  }
}
      const handleProfChange = (updatedFields) => {
    if (!activeEduId) {
      const newId = Date.now()
      setActiveProfId(newId)
      setSvData((prev) => ({
        ...prev,
        expr: [...prev.expr, { ...updatedFields, id: newId }],
      }))

    } else {
      setSvData((prev) => ({
        ...prev,
        expr: prev.expr.map((item) =>
          item.id === activeProfId ? { ...item, ...updatedFields } : item
        ),
      }))
    }
  }
    const handleEduSave = () => {
  setActiveEduId(null)
}
    const handleProfSave = () => {
  setActiveEduId(null)
}
  const handleAdd=(newed)=>{
     setSvData((prev)=>({
      ...prev,education:[...prev.education,{...newed,id:Date.now()}]
    }))
  }
  const handlePrf=(newpr)=>{
    setPrf((prev)=>[...prev,newpr])
  }

  const handleSave=(newInfo)=>{
    setSvData((prev)=>({
      ...prev,personal:newInfo
    }))
  }
  return (
    <>
        <div className={styles.container}>
          <div>
            <GenralAcc genInfo={cvData.personal} onSave={handleSave} />
            <EduAcc eduIn={handleEduChange}  onAdd={handleEduSave}/>
            <ProfAcc onSave={handleProfChange} onAdd={handleProfSave}/>
            </div>
            <Template genr={cvData.personal} eduIn={cvData.education} prfIn={cvData.expr}/>
        </div>
    
    </>
  )
}

export default Interface