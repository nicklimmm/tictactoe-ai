import { createContext } from "react"
import { useGrid } from "../components/Grid/GridHooks"

const GameContext = createContext()

const GameProvider = ({ children }) => {
  const [grid, fill, currentTurn] = useGrid()

  return (
    <GameContext.Provider value={{ grid, fill, currentTurn }}>
      {children}
    </GameContext.Provider>
  )
}

export { GameContext, GameProvider }
