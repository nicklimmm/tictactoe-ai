import "./App.css"
import React, { useState } from "react"
import Grid from "./components/Grid/Grid"
import Menu from "./components/Menu/Menu"

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
      {mode !== "" ? (
        <Grid mode={mode} setMode={setMode} />
      ) : (
        <Menu mode={mode} setMode={setMode} />
      )}
    </div>
  )
}

export default App
