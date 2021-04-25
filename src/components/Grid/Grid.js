import { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import { GameContext } from "../../providers/GameProvider"
import { ModeContext } from "../../App"
import EndModal from "../EndGameModal/EndGameModal"
import "./Grid.scss"

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    height: "100vh",
  },
})

const Grid = () => {
  const classes = useStyles()
  const { grid, fill, currentTurn } = useContext(GameContext)
  const { mode } = useContext(ModeContext)

  // To prevent making a move during Bot's turn or when a cell is already filled
  const disabledClass = (row, col) => {
    if ((currentTurn === "O" && mode !== "HH") || grid[row][col] !== "")
      return "disabled"
    else return ""
  }

  const displayTurn = () => {
    if (mode === "HH") return currentTurn === "X" ? "Player 1's" : "Player 2's"
    return currentTurn === "X" ? "Your" : "Bot's"
  }

  return (
    <Box className={classes.wrapper}>
      <EndModal></EndModal>
      <h1 id="turn-display">{displayTurn()} Turn</h1>
      <div className="grid-container">
        <button
          className={`upper-left cell ${disabledClass(0, 0)}`}
          onClick={() => fill(0, 0)}
        >
          {grid[0][0]}
        </button>
        <button
          className={`upper-center cell ${disabledClass(0, 1)}`}
          onClick={() => fill(0, 1)}
        >
          {grid[0][1]}
        </button>
        <button
          className={`upper-right cell ${disabledClass(0, 2)}`}
          onClick={() => fill(0, 2)}
        >
          {grid[0][2]}
        </button>
        <button
          className={`middle-left cell ${disabledClass(1, 0)}`}
          onClick={() => fill(1, 0)}
        >
          {grid[1][0]}
        </button>
        <button
          className={`middle-center cell ${disabledClass(1, 1)}`}
          onClick={() => fill(1, 1)}
        >
          {grid[1][1]}
        </button>
        <button
          className={`middle-right cell ${disabledClass(1, 2)}`}
          onClick={() => fill(1, 2)}
        >
          {grid[1][2]}
        </button>
        <button
          className={`bottom-left cell ${disabledClass(2, 0)}`}
          onClick={() => fill(2, 0)}
        >
          {grid[2][0]}
        </button>
        <button
          className={`bottom-center cell ${disabledClass(2, 1)}`}
          onClick={() => fill(2, 1)}
        >
          {grid[2][1]}
        </button>
        <button
          className={`bottom-right cell ${disabledClass(2, 2)}`}
          onClick={() => fill(2, 2)}
        >
          {grid[2][2]}
        </button>
      </div>
    </Box>
  )
}

export default Grid
