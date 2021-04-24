import { useState, useEffect } from "react"
import { getWinner, randomChoice, isFull } from "./GridHelper"
import { botMove } from "./Bot"

export const useTurn = () => {
  // X is for Human, O is for Human or Bot
  const [currentTurn, setCurrentTurn] = useState(randomChoice(["X", "O"]))

  const changeTurn = () => setCurrentTurn(currentTurn === "X" ? "O" : "X")

  return [currentTurn, changeTurn]
}

export const useGrid = (props) => {
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
    let winner = getWinner(grid)

    if (winner !== "") {
      alert(`${winner} wins!`)
      clearGrid()
      props.setMode("")
    } else if (isFull(grid)) {
      alert("Tie!")
      clearGrid()
      props.setMode("")
    } else if (
      props.mode !== "" &&
      props.mode !== "HH" &&
      currentTurn === "O"
    ) {
      let [row, col] = botMove([...grid], props.mode)
      setTimeout(() => {
        fill(row, col)
      }, 500)
    }

    // eslint-disable-next-line
  }, [grid])

  return [grid, fill, currentTurn]
}
