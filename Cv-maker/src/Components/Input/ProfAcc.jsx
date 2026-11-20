import React, { useState } from 'react'
import { faSquarePlus, faSquareMinus, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { faBriefcase, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../style/ProfAcc.module.css'

function ProfAcc({ formData, profList, onChange, onSave, onEdit, onToggle, onDelete }) {
  const [active, setActive] = useState(false)

  const handleClick = () => setActive((prev) => !prev)

  const handleSelectItem = (item) => {
    onEdit(item)
    setActive(true)
  }

  return (
    <div className={styles.container}>
      <h2 onClick={handleClick}>
        <FontAwesomeIcon icon={faBriefcase} /> Professional Experience
        <FontAwesomeIcon icon={active ? faSquareMinus : faSquarePlus} />
      </h2>

      <div className={active ? styles.form : styles.hidden}>
        <form onSubmit={onSave}>
          <h3>Job title</h3>
          <input className={styles.input} type="text" name="jT" value={formData.jT} onChange={onChange} placeholder="Enter Job title" /> <br />

          <h3>Company</h3>
          <input className={styles.input} type="text" name="cmp" value={formData.cmp} onChange={onChange} placeholder="Enter Company" />

          <h3>City</h3>
          <input type="text" className={styles.input} name="ct" value={formData.ct} onChange={onChange} placeholder="Insert city" />

          <h3>Country</h3>
          <input type="text" className={styles.input} name="cnt" value={formData.cnt} onChange={onChange} placeholder="Insert country" />

          <div className={styles.div}>
            <div>
              <h3>Start Date</h3>
              <input type="date" name="strt" value={formData.strt} onChange={onChange} />
            </div>
            <div>
              <h3>End Date</h3>
              <input type="date" name="end" value={formData.end} onChange={onChange} />
            </div>
            <h3>Description</h3>
            <textarea placeholder="Main tasks" className={styles.input} name="desc" value={formData.desc} onChange={onChange}></textarea>
          </div>

          <button className={styles.btn} type="submit">Save</button>
        </form>

        <div className={styles.savedList}>
          {profList.map((item) => (
            <div key={item.id} className={styles.savedItem}>
              <span onClick={() => handleSelectItem(item)} style={{ cursor: 'pointer' }}>
                {item.jT || 'Untitled Role'}
              </span>

              <div className={styles.actions}>
                <button type="button" onClick={() => onToggle(item.id)}>
                  <FontAwesomeIcon icon={item.hidden ? faEyeSlash : faEye} />
                </button>
                <button type="button" onClick={() => onDelete(item.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfAcc