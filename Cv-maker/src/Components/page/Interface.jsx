import React, { useState } from 'react'
import EduAcc from '../Input/EduAcc'
import GenralAcc from '../Input/GenralAcc'
import ProfAcc from '../Input/ProfAcc'
import Template from './Template'
import styles from '../style/Page.module.css'
import SkillsAcc from '../Input/SkillsAcc'


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

const emptySkill = {
  name: '',
}

const sampleCvData = {
  personal: {
    name: 'Amanuel Fekadu',
    email: 'amanuel@example.com',
    phone: '+251 91 234 5678',
    location: 'Addis Ababa, Ethiopia',
    linkedin: 'linkedin.com/in/amanuel-fekadu',
    smry: 'Motivated Computer Science student and front-end developer dedicated to building clean, accessible, and responsive web applications using React, JavaScript, HTML, and CSS. I enjoy breaking down user interfaces into reusable components, managing interactive state smoothly, and creating intuitive user experiences with clear visual hierarchy. Through hands-on projects and practice, I focus on writing maintainable code, refining layout details, and turning ideas into reliable, engaging interfaces across different screen sizes.',
  },
  education: [
    {
      id: 101,
      hidden: false,
      deg: 'B.Sc.',
      school: 'Admas University',
      field: 'Computer Science',
      location: 'Addis Ababa, Ethiopia',
      strt: '2001-09-01',
      end: '2020-07-01',
    },
  ],
  expr: [
    {
      id: 201,
      hidden: false,
      jT: 'Front-End Developer (Projects & Bootcamp)',
      cmp: 'Self-Directed / Bootcamp Labs',
      ct: 'Addis Ababa',
      cnt: 'Ethiopia',
      strt: '2026-01-15',
      end: '2026-11-01',
      desc: 'Built interactive front-end web applications and user interfaces using React, JavaScript, HTML, and CSS with a strong focus on component structure and live state updates. Implemented dynamic forms, item management actions, and clean layout styling so users can see immediate feedback as they interact with the page. Worked carefully on spacing, alignment, and readability across views while keeping the code modular, organized, and easy to extend.',
    },
  ],
  skills: [
    { id: 301, name: 'React', hidden: false },
    { id: 302, name: 'JavaScript', hidden: false },
    { id: 303, name: 'HTML', hidden: false },
    { id: 304, name: 'CSS', hidden: false },
  ],
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
  const [skillForm, setSkillForm] = useState(emptySkill)
  const [activeSkillId, setActiveSkillId] = useState(null)
    const handleSkillChange = (e) => {
  const { name, value } = e.target
  const updated = { ...skillForm, [name]: value }
  setSkillForm(updated)

  if (!activeSkillId) {
    const newId = Date.now()
    setActiveSkillId(newId)
    setSvData((prev) => ({
      ...prev,
      skills: [...prev.skills, { ...updated, id: newId, hidden: false }],
    }))
  } else {
    setSvData((prev) => ({
      ...prev,
      skills: prev.skills.map((item) =>
        item.id === activeSkillId ? { ...item, ...updated } : item
      ),
    }))
  }
}

const handleSkillSave = (e) => {
  e.preventDefault()
  setActiveSkillId(null)
  setSkillForm(emptySkill)
}

const handleEditSkill = (item) => {
  setActiveSkillId(item.id)
  setSkillForm(item)
}

const handleToggleSkill = (id) => {
  setSvData((prev) => ({
    ...prev,
    skills: prev.skills.map((item) =>
      item.id === id ? { ...item, hidden: !item.hidden } : item
    ),
  }))
}

const handleDeleteSkill = (id) => {
  setSvData((prev) => ({
    ...prev,
    skills: prev.skills.filter((item) => item.id !== id),
  }))
  if (activeSkillId === id) {
    setActiveSkillId(null)
    setSkillForm(emptySkill)
  }
}
  const [previewMode, setPreviewMode] = useState(false)

const handleLoadSample = () => {
  setSvData(sampleCvData)
  setEduForm(emptyEdu)
  setActiveEduId(null)
  setProfForm(emptyProf)
  setActiveProfId(null)
  setSkillForm(emptySkill)
  setActiveSkillId(null)
}

const handleTogglePreview = () => {
  setPreviewMode((prev) => !prev)
}

const handleClearAll = () => {
  setSvData({
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
  setEduForm(emptyEdu)
  setActiveEduId(null)
  setProfForm(emptyProf)
  setActiveProfId(null)
  setSkillForm(emptySkill)
  setActiveSkillId(null)
}
  return (
  <>
    <div className={styles.btns}>
      <button type="button" onClick={handledwld} className={styles.btn}>
        Download
      </button>

      <div className={styles.btnss}>
        <button type="button" onClick={handleLoadSample} className={styles.opt}>
          Sample Data
        </button>
        <button type="button" onClick={handleTogglePreview} className={styles.opt}>
          {previewMode ? 'Edit Mode' : 'Preview'} 
        </button>
        <button type="button" onClick={handleClearAll} className={styles.opt}>
          Clear
        </button>
      </div>
    </div>

    <div className={styles.container}>
      {!previewMode && (
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
          <SkillsAcc
            formData={skillForm}
            skillList={cvData.skills}
            onChange={handleSkillChange}
            onSave={handleSkillSave}
            onEdit={handleEditSkill}
            onToggle={handleToggleSkill}
            onDelete={handleDeleteSkill}
          />
        </div>
      )}

      <Template
        genr={cvData.personal}
        eduIn={cvData.education.filter((item) => !item.hidden)}
        prfIn={cvData.expr.filter((item) => !item.hidden)}
        skillsIn={cvData.skills.filter((item) => !item.hidden)}
      />
    </div>
  </>
)
}

export default Interface