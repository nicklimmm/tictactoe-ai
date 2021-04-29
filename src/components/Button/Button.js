import "./Button.scss"

const Button = ({ children, className, ...others }) => {
  return (
    <button className={`button ${className}`} {...others}>
      {children}
    </button>
  )
}

export default Button
