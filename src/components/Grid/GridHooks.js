import { useState, useEffect, useContext } from "react"
import { randomChoice, getWinner, isFull } from "./GridHelper"
import { botMove } from "./Bot"
import { ModeContext } from "../../App"

export const useTurn = () => {
  // X is for Human, O is for Human or Bot
  const [currentTurn, setCurrentTurn] = useState(randomChoice(["X", "O"]))

  const changeTurn = () => setCurrentTurn(currentTurn === "X" ? "O" : "X")

  return [currentTurn, changeTurn]
}

export const useGrid = () => {
  const { mode } = useContext(ModeContext)
  const [grid, setGrid] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ])

  const [currentTurn, changeTurn] = useTurn()

  const clearGrid = () => {
    setGrid([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ])
  }

  const fill = (row, col) => {
    if (grid[row][col] === "") {
      let temp = [...grid]
      temp[row][col] = currentTurn
      changeTurn()
      setGrid(temp)
    }
  }

  useEffect(() => {
    if (
      mode !== "HH" &&
      !isFull(grid) &&
      getWinner(grid) === "" &&
      currentTurn === "O"
    ) {
      let [row, col] = botMove([...grid], mode)
      setTimeout(() => {
        fill(row, col)
      }, 1000)
    }

    // eslint-disable-next-line
  }, [grid])

  return [grid, clearGrid, fill, currentTurn]
}
