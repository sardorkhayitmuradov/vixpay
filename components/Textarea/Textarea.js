const Textarea = ({id,title, row, cols, onGetValue , className, labelClassName, wrapperClassName}) => {
  return (
    <div className={wrapperClassName}>
      <label htmlFor={id} className={labelClassName}>{title}</label>
      <textarea
        className={className}
        id={id}
        rows={row}
        cols={cols}
        onChange={(e) => onGetValue(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Textarea;
