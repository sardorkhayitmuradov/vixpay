const Button = ({className , children, onClicked}) => {
  return (
    <button className={className} onClick={()=> onClicked}>
        {children}
    </button>
  )
}

export default Button