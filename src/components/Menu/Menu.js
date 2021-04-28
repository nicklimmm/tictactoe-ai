import { useContext } from "react"
import { ModeContext } from "../../App"

const ModeButton = ({ onClick, children, ...others }) => {
  return (
    <button onClick={onClick} {...others}>
      {children}
    </button>
  )
}

const Menu = () => {
  const { setMode } = useContext(ModeContext)

  // Returns function
  const play = (mode) => {
    return () => setMode(mode)
  }

  return (
    <div>
      <h1>Welcome to TicTacToe AI</h1>
      <div>
        <ModeButton onClick={play("HH")}>Human vs Human</ModeButton>
        <ModeButton onClick={play("E")}>Easy</ModeButton>
        <ModeButton onClick={play("M")}>Medium</ModeButton>
        <ModeButton onClick={play("H")}>Hard</ModeButton>
        <ModeButton onClick={play("I")}>Impossible</ModeButton>
      </div>
    </div>
  )
}

export default Menu
