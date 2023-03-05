
const Input = ({id, title, className, type, value, onGetValue, wrapperClassName, labelClassName}) => {
  return (
    <div className={wrapperClassName}>
        <label htmlFor={id} className={labelClassName}>{title}</label>
        <input id={id} type={type} className={className} value={value} onChange={(e)=> onGetValue(e.target.value)} />
    </div>
  )
}

export default Input