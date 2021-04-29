import { useContext } from "react"
import { ModeContext } from "../../App"
import Button from "../Button/Button"
import "./Menu.scss"

const ModeButton = ({ children, ...others }) => {
  return <Button {...others}>{children}</Button>
}

const Menu = () => {
  const { setMode } = useContext(ModeContext)

  // Returns function
  const play = (mode) => {
    return () => setMode(mode)
  }

  return (
    <div className="menu">
      <h1 className="title">Welcome to TicTacToe AI</h1>
      <div className="button-group">
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
