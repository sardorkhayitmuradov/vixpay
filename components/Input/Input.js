
const Input = ({id, title, className, type, value, onGetValue, wrapperClassName,labelWrapperClassName, labelClassName, required , requiredClassName , description}) => {
  return (
    <div className={wrapperClassName}>
        <div className={`flex items-center justify-between ${labelWrapperClassName}`}>
          <label htmlFor={id} className={labelClassName}>{title}</label>
          {
            required && <p className={requiredClassName}>{required}</p>
          }
        </div>
        <input id={id} type={type} className={className} value={value} onChange={(e)=> onGetValue(e.target.value)} />
        {
          description && <p className="mt-1 text-[14px] leading-[140%] tracking-[-0.09px] text-[#9CA3AF] font-NanumGothicBold">{description}</p>
        }
    </div>
  )
}

export default Input