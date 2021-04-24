import { useContext } from "react"
import { Button, ButtonGroup, Container, Box } from "@material-ui/core"
import { ModeContext } from "../../App"
import "./Menu.css"

const Menu = () => {
  const { setMode } = useContext(ModeContext)

  // returns function
  const play = (mode) => {
    return () => setMode(mode)
  }

  return (
    <Box>
      <Container maxWidth="md">
        <h1 className="title">Welcome to TicTacToe AI</h1>
        <ButtonGroup orientation="vertical" color="primary" variant="contained">
          <Button onClick={play("HH")}>Human vs Human</Button>
          <Button onClick={play("E")}>Easy</Button>
          <Button onClick={play("M")}>Medium</Button>
          <Button onClick={play("H")}>Hard</Button>
          <Button onClick={play("I")}>Impossible</Button>
        </ButtonGroup>
      </Container>
    </Box>
  )
}

export default Menu
