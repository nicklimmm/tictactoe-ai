import React from "react"

const Menu = (props) => {
  const play = (mode) => {
    props.setMode(mode)
  }
  return (
    <div>
      <h1>Welcome to TicTacToe AI</h1>
      <button
        onClick={() => {
          play("HH")
        }}
      >
        Human vs Human
      </button>
      <button
        onClick={() => {
          play("E")
        }}
      >
        Easy
      </button>
      <button
        onClick={() => {
          play("M")
        }}
      >
        Medium
      </button>
      <button
        onClick={() => {
          play("H")
        }}
      >
        Hard
      </button>
      <button
        onClick={() => {
          play("I")
        }}
      >
        Impossible
      </button>
    </div>
  )
}

export default Menu
