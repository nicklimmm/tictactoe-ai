import React from "react"
import { useGrid } from "./GridHooks"
import "./Grid.css"

const Grid = (props) => {
  const [grid, fill, currentTurn] = useGrid(props)

  // To prevent making a move during Bot's turn or when a cell is already filled
  const disabledClass = (row, col) => {
    if ((currentTurn === "O" && props.mode !== "HH") || grid[row][col] !== "")
      return "disabled"
    else return ""
  }

  return (
    <div class="grid-container">
      <button
        className={`upper-left ${disabledClass(0, 0)}`}
        onClick={() => fill(0, 0)}
      >
        {grid[0][0]}
      </button>
      <button
        className={`upper-center ${disabledClass(0, 1)}`}
        onClick={() => fill(0, 1)}
      >
        {grid[0][1]}
      </button>
      <button
        className={`upper-right ${disabledClass(0, 2)}`}
        onClick={() => fill(0, 2)}
      >
        {grid[0][2]}
      </button>
      <button
        className={`middle-left ${disabledClass(1, 0)}`}
        onClick={() => fill(1, 0)}
      >
        {grid[1][0]}
      </button>
      <button
        className={`middle-center ${disabledClass(1, 1)}`}
        onClick={() => fill(1, 1)}
      >
        {grid[1][1]}
      </button>
      <button
        className={`middle-right ${disabledClass(1, 2)}`}
        onClick={() => fill(1, 2)}
      >
        {grid[1][2]}
      </button>
      <button
        class={`bottom-left ${disabledClass(2, 0)}`}
        onClick={() => fill(2, 0)}
      >
        {grid[2][0]}
      </button>
      <button
        class={`bottom-center ${disabledClass(2, 1)}`}
        onClick={() => fill(2, 1)}
      >
        {grid[2][1]}
      </button>
      <button
        class={`bottom-right ${disabledClass(2, 2)}`}
        onClick={() => fill(2, 2)}
      >
        {grid[2][2]}
      </button>
    </div>
  )
}

export default Grid
