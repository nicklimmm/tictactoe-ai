import { useContext } from "react"
import { GameContext } from "../../providers/GameProvider"
import { ModeContext } from "../../App"
import { Modal, Paper } from "@material-ui/core"
import { isFull, getWinner } from "../Grid/GridHelper"

const modalStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
}

const paperStyle = {
  padding: "15px",
  width: "50vmin",
  height: "50vmin",
}

const EndModal = () => {
  const { mode, setMode } = useContext(ModeContext)
  const { grid, clearGrid } = useContext(GameContext)

  const isDone = () => {
    return isFull(grid) || getWinner(grid) !== ""
  }

  const displayWinner = () => {
    let winner = getWinner(grid)

    if (winner === "") return "Tied"
    // reversed
    else if (mode === "HH") {
      return winner === "X" ? "Player 1 Won" : "Player 2 Won"
    } else {
      return winner === "X" ? "You Won" : "You Lost"
    }
  }

  const handleClose = () => {
    setMode("")
    clearGrid()
  }

  return (
    <Modal open={isDone()} onClose={handleClose} style={modalStyle}>
      <Paper style={paperStyle}>
        <h2>{displayWinner()}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          architecto illo doloremque, quod laborum quaerat modi aliquid nam quae
          omnis.
        </p>
      </Paper>
    </Modal>
  )
}

export default EndModal
