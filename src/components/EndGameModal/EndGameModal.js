import { useContext } from "react"
import { GameContext } from "../../providers/GameProvider"
import { ModeContext } from "../../App"
import { isFull, getWinner } from "../Grid/GridHelper"

const EndModal = () => {
  const { mode, setMode } = useContext(ModeContext)
  const { grid } = useContext(GameContext)

  const isDone = (grid) => {
    return isFull(grid) || getWinner(grid) !== ""
  }

  const displayWinner = (grid) => {
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
    <>
      {isDone(grid) && (
        <div className="modal">
          <h2>{displayWinner(grid)}</h2>

          {/* Only display when playing with bots */}
          {mode !== "HH" && getWinner(grid) === "O" && (
            <p>{"Try again next time :)"}</p>
          )}

          <button onClick={handleClose}>Return</button>
        </div>
      )}
    </>
  )
}

export default EndModal
