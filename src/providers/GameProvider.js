import { createContext } from "react"
import { useGrid } from "../components/Grid/GridHooks"

const GameContext = createContext()

const GameProvider = ({ children }) => {
  const [grid, clearGrid, fill, currentTurn] = useGrid()

  return (
    <GameContext.Provider value={{ grid, clearGrid, fill, currentTurn }}>
      {children}
    </GameContext.Provider>
  )
}

export { GameContext, GameProvider }
