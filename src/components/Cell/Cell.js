import "./Cell.scss"

const Cell = ({ children, className, ...others }) => {
  return (
    <button className={`cell ${className}`} {...others}>
      {children}
    </button>
  )
}

export default Cell
