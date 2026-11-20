import React, { useState } from 'react'
import EduAcc from '../Input/EduAcc'
import GenralAcc from '../Input/GenralAcc'
import ProfAcc from '../Input/ProfAcc'
import Template from './Template'
import styles from '../style/Page.module.css'

const emptyEdu = {
  deg: '',
  school: '',
  field: '',
  location: '',
  strt: '',
  end: '',
}

const emptyProf = {
  jT: '',
  cmp: '',
  ct: '',
  cnt: '',
  strt: '',
  end: '',
  desc: '',
}

function Interface() {
  const [cvData, setSvData] = useState({
    personal: {
      name: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      smry: '',
    },
    education: [],
    expr: [],
    skills: [],
  })

  const handleSave = (newInfo) => {
    setSvData((prev) => ({
      ...prev,
      personal: newInfo,
    }))
  }

  const [eduForm, setEduForm] = useState(emptyEdu)
  const [activeEduId, setActiveEduId] = useState(null)

  const handleEduChange = (e) => {
    const { name, value } = e.target
    const updated = { ...eduForm, [name]: value }
    setEduForm(updated)

    if (!activeEduId) {
      const newId = Date.now()
      setActiveEduId(newId)
      setSvData((prev) => ({
        ...prev,
        education: [...prev.education, { ...updated, id: newId, hidden: false }],
      }))
    } else {
      setSvData((prev) => ({
        ...prev,
        education: prev.education.map((item) =>
          item.id === activeEduId ? { ...item, ...updated } : item
        ),
      }))
    }
  }

  const handleEduSave = (e) => {
    e.preventDefault()
    setActiveEduId(null)
    setEduForm(emptyEdu)
  }

  const handleEditEdu = (item) => {
    setActiveEduId(item.id)
    setEduForm(item)
  }

  const handleToggleEdu = (id) => {
    setSvData((prev) => ({
      ...prev,
      education: prev.education.map((item) =>
        item.id === id ? { ...item, hidden: !item.hidden } : item
      ),
    }))
  }

  const handleDeleteEdu = (id) => {
    setSvData((prev) => ({
      ...prev,
      education: prev.education.filter((item) => item.id !== id),
    }))
    if (activeEduId === id) {
      setActiveEduId(null)
      setEduForm(emptyEdu)
    }
  }

  const [profForm, setProfForm] = useState(emptyProf)
  const [activeProfId, setActiveProfId] = useState(null)

  const handleProfChange = (e) => {
    const { name, value } = e.target
    const updated = { ...profForm, [name]: value }
    setProfForm(updated)

    if (!activeProfId) {
      const newId = Date.now()
      setActiveProfId(newId)
      setSvData((prev) => ({
        ...prev,
        expr: [...prev.expr, { ...updated, id: newId, hidden: false }],
      }))
    } else {
      setSvData((prev) => ({
        ...prev,
        expr: prev.expr.map((item) =>
          item.id === activeProfId ? { ...item, ...updated } : item
        ),
      }))
    }
  }

  const handleProfSave = (e) => {
    e.preventDefault()
    setActiveProfId(null)
    setProfForm(emptyProf)
  }

  const handleEditProf = (item) => {
    setActiveProfId(item.id)
    setProfForm(item)
  }

  const handleToggleProf = (id) => {
    setSvData((prev) => ({
      ...prev,
      expr: prev.expr.map((item) =>
        item.id === id ? { ...item, hidden: !item.hidden } : item
      ),
    }))
  }

  const handleDeleteProf = (id) => {
    setSvData((prev) => ({
      ...prev,
      expr: prev.expr.filter((item) => item.id !== id),
    }))
    if (activeProfId === id) {
      setActiveProfId(null)
      setProfForm(emptyProf)
    }
  }
    const handledwld=()=>{
      window.print()
    }
  return (
    <>
      <button onClick={handledwld} className={styles.btn}>Downlad</button>
    <div className={styles.container}>
      <div>
        <GenralAcc genInfo={cvData.personal} onSave={handleSave} />
        <EduAcc
          formData={eduForm}
          eduList={cvData.education}
          onChange={handleEduChange}
          onSave={handleEduSave}
          onEdit={handleEditEdu}
          onToggle={handleToggleEdu}
          onDelete={handleDeleteEdu}
        />
        <ProfAcc
          formData={profForm}
          profList={cvData.expr}
          onChange={handleProfChange}
          onSave={handleProfSave}
          onEdit={handleEditProf}
          onToggle={handleToggleProf}
          onDelete={handleDeleteProf}
        />
      </div>

      <Template
        genr={cvData.personal}
        eduIn={cvData.education.filter((item) => !item.hidden)}
        prfIn={cvData.expr.filter((item) => !item.hidden)}
      />
    </div>
    </>
  )
}

export default Interface