import React, { useState } from 'react'
import { faSquarePlus, faSquareMinus, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { faGraduationCap, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../style/EduAcc.module.css'

function EduAcc({ formData, eduList, onChange, onSave, onEdit, onToggle, onDelete }) {
  const [active, setActive] = useState(false)

  const handleClick = () => setActive((prev) => !prev)

  const handleSelectItem = (item) => {
    onEdit(item)
    setActive(true)
  }

  return (
    <div className={styles.container}>
      <h2 onClick={handleClick}>
        <FontAwesomeIcon icon={faGraduationCap} /> Education Experience
        <FontAwesomeIcon icon={active ? faSquareMinus : faSquarePlus} />
      </h2>

      <div className={active ? styles.form : styles.hidden}>
        <form onSubmit={onSave}>
          <h3>Degree</h3>
          <input className={styles.input} type="text" placeholder="Honor of degree" name="deg" value={formData.deg} onChange={onChange} /> <br />

          <h3>School</h3>
          <input className={styles.input} type="text" placeholder="Enter school/university" name="school" value={formData.school} onChange={onChange} /> <br />

          <h3>Field</h3>
          <input className={styles.input} type="text" placeholder="Enter your field" name="field" value={formData.field} onChange={onChange} />

          <h3>Country</h3>
          <input className={styles.input} type="text" placeholder="Enter country" name="location" value={formData.location} onChange={onChange} />

          <div className={styles.div}>
            <div>
              <h3>Start Date</h3>
              <input type="date" name="strt" value={formData.strt} onChange={onChange} />
            </div>
            <div>
              <h3>End Date</h3>
              <input type="date" name="end" value={formData.end} onChange={onChange} />
            </div>
          </div>

          <button className={styles.btn} type="submit">Save</button>
        </form>

        <div className={styles.savedList}>
          {eduList.map((item) => (
            <div key={item.id} className={styles.savedItem}>
              <span onClick={() => handleSelectItem(item)} style={{ cursor: 'pointer' }}>
                {item.school || 'Untitled School'}
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

export default EduAcc