import React, { useState } from 'react'
import { faSquarePlus, faSquareMinus, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { faWrench, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../style/SkillsAcc.module.css'

function SkillsAcc({ formData, skillList, onChange, onSave, onEdit, onToggle, onDelete }) {
  const [active, setActive] = useState(false)

  const handleClick = () => setActive((prev) => !prev)

  const handleSelectItem = (item) => {
    onEdit(item)
    setActive(true)
  }

  return (
    <div className={styles.container}>
      <h2 onClick={handleClick}>
        <FontAwesomeIcon icon={faWrench} /> Skills
        <FontAwesomeIcon icon={active ? faSquareMinus : faSquarePlus} />
      </h2>

      <div className={active ? styles.form : styles.hidden}>
        <form onSubmit={onSave}>
          <h3>Skill</h3>
          <input
            className={styles.input}
            type="text"
            placeholder="e.g. React, Go, SQL"
            name="name"
            value={formData.name}
            onChange={onChange}
          />

          <button className={styles.btn} type="submit">Save</button>
        </form>

        <div className={styles.savedList}>
          {skillList.map((item) => (
            <div key={item.id} className={styles.savedItem}>
              <span onClick={() => handleSelectItem(item)} style={{ cursor: 'pointer' }}>
                {item.name || 'Untitled Skill'}
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

export default SkillsAcc