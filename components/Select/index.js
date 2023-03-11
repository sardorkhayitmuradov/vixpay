import React from 'react'

const Select = ({name, id, children ,selectClassName, onGetValue}) => {
  return (
    <select name={name} id={id} className={selectClassName} onChange={(e) => onGetValue(e)}>
        {children}
    </select>
  )
}

export default Select