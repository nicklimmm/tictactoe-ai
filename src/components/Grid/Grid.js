import { useContext } from "react"
import { GameContext } from "../Game/GameProvider"
import { ModeContext } from "../../App"
import Cell from "../Cell/Cell"
import "./Grid.scss"

const Grid = () => {
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
    <div className="grid">
      <h1 className="turn-display">{displayTurn()} Turn</h1>
      <div className="grid-container">
        <Cell
          className={`upper-left ${disabledClass(0, 0)}`}
          onClick={() => fill(0, 0)}
        >
          {grid[0][0]}
        </Cell>
        <Cell
          className={`upper-center ${disabledClass(0, 1)}`}
          onClick={() => fill(0, 1)}
        >
          {grid[0][1]}
        </Cell>
        <Cell
          className={`upper-right ${disabledClass(0, 2)}`}
          onClick={() => fill(0, 2)}
        >
          {grid[0][2]}
        </Cell>
        <Cell
          className={`middle-left ${disabledClass(1, 0)}`}
          onClick={() => fill(1, 0)}
        >
          {grid[1][0]}
        </Cell>
        <Cell
          className={`middle-center ${disabledClass(1, 1)}`}
          onClick={() => fill(1, 1)}
        >
          {grid[1][1]}
        </Cell>
        <Cell
          className={`middle-right ${disabledClass(1, 2)}`}
          onClick={() => fill(1, 2)}
        >
          {grid[1][2]}
        </Cell>
        <Cell
          className={`bottom-left ${disabledClass(2, 0)}`}
          onClick={() => fill(2, 0)}
        >
          {grid[2][0]}
        </Cell>
        <Cell
          className={`bottom-center ${disabledClass(2, 1)}`}
          onClick={() => fill(2, 1)}
        >
          {grid[2][1]}
        </Cell>
        <Cell
          className={`bottom-right ${disabledClass(2, 2)}`}
          onClick={() => fill(2, 2)}
        >
          {grid[2][2]}
        </Cell>
      </div>
    </div>
  )
}

export default Grid
