import "./App.css"
import Game from "./components/Game/Game"
import Menu from "./components/Menu/Menu"
import { createContext, useState } from "react"

const ModeContext = createContext()

function App() {
  /* 
  Mode types:
  "" - Not Playing
  "HH" - Human vs Human
  "E" - Easy
  "M" - Medium
  "H" - Hard
  "I" - Impossible
  */

  const [mode, setMode] = useState("")

  return (
    <div>
      <ModeContext.Provider value={{ mode, setMode }}>
        {mode !== "" ? <Game /> : <Menu />}
      </ModeContext.Provider>
    </div>
  )
}

export default App
export { ModeContext }
