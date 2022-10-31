import React from 'react'

const inputField = ({ formLabel, inputType, idName }) => {
  return (
    <div className="form-group d-flex mb-4">
      <label className="form-label">{formLabel}</label>
      <input className="form-control" type={inputType} id={idName} />
    </div>
  )
}

export default inputField
