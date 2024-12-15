import React from 'react'
import './Checkbox.css'

const Checkbox = ({ id, checked, onChange }) => {
  return (
    <div>
      <div className="content">
        <label className="checkBox">
          <input id={id} type="checkbox" checked={checked} onChange={onChange} />
          <div className="transition"></div>
        </label>
      </div>
    </div>
  )
}

export default Checkbox