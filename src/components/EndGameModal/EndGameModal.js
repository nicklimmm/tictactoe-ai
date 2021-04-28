import { useContext } from "react"
import { Modal, Paper, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { GameContext } from "../../providers/GameProvider"
import { ModeContext } from "../../App"
import { isFull, getWinner } from "../Grid/GridHelper"

const useStyles = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  paper: {
    padding: "15px",
  },
})

const EndModal = () => {
  const classes = useStyles()
  const { mode, setMode } = useContext(ModeContext)
  const { grid } = useContext(GameContext)

  const isDone = () => {
    return isFull(grid) || getWinner(grid) !== ""
  }

  const displayWinner = () => {
    let winner = getWinner(grid)

    if (winner === "") return "Tied"
    // Human vs Human message
    else if (mode === "HH") {
      return winner === "X" ? "Player 1 Wins!" : "Player 2 Wins!"
    }

    // Human vs Bot message
    else {
      return winner === "X" ? "You Win!" : "You Lose!"
    }
  }

  const handleClose = () => {
    setMode("")
  }

  return (
    <Modal open={isDone()} onClose={handleClose} className={classes.modal}>
      <Paper className={classes.paper}>
        <h2>{displayWinner()}</h2>

        {/* Only display when playing with bots */}
        {mode !== "HH" && getWinner(grid) === "O" && (
          <p>{"Try again next time :)"}</p>
        )}

        <Button color="primary" variant="contained" onClick={handleClose}>
          Return
        </Button>
      </Paper>
    </Modal>
  )
}

export default EndModal
