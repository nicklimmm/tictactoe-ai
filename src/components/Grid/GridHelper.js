export const getWinner = (grid) => {
  // Check horizontal
  for (let i = 0; i < 3; i++) {
    if (
      grid[i][0] !== "" &&
      grid[i][0] === grid[i][1] &&
      grid[i][1] === grid[i][2]
    )
      return grid[i][0]
  }

  // Check vertical
  for (let j = 0; j < 3; j++) {
    if (
      grid[0][j] !== "" &&
      grid[0][j] === grid[1][j] &&
      grid[1][j] === grid[2][j]
    )
      return grid[0][j]
  }

  // Main Diagonal
  if (
    grid[0][0] !== "" &&
    grid[0][0] === grid[1][1] &&
    grid[1][1] === grid[2][2]
  )
    return grid[0][0]

  // Second Diagonal
  if (
    grid[0][2] !== "" &&
    grid[0][2] === grid[1][1] &&
    grid[1][1] === grid[2][0]
  )
    return grid[0][2]

  return ""
}

export const isFull = (grid) => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i][j] === "") return false
    }
  }
  return true
}

export const availableMoves = (grid) => {
  let available = []
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i][j] === "") available.push([i, j])
    }
  }
  return available
}

export const minimax = (grid, depth = 1, isMaximizing = false) => {
  let winner = getWinner(grid)

  if (winner === "O") return 100 - depth
  if (winner === "X") return -100 + depth
  if (isFull(grid)) return 0

  let scores = []
  let available = availableMoves(grid)
  for (let i = 0; i < available.length; i++) {
    let [row, col] = available[i]
    if (isMaximizing) {
      grid[row][col] = "O"
    } else {
      grid[row][col] = "X"
    }

    scores.push(minimax([...grid], depth + 1, !isMaximizing))

    grid[row][col] = ""
  }

  if (isMaximizing) return Math.max(...scores)
  else return Math.min(...scores)
}

export const randomChoice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

export const randomMove = (grid) => {
  let available = availableMoves(grid)
  return randomChoice(available)
}

export const smartMove = (grid) => {
  let bestScore = Math.log(0) // INF
  let bestMove = [[0, 0]]
  let gridCopy = [...grid]
  let available = availableMoves(grid)

  for (let i = 0; i < available.length; i++) {
    let [row, col] = available[i]
    gridCopy[row][col] = "O"

    let score = minimax(gridCopy)

    gridCopy[row][col] = ""

    if (score > bestScore) {
      bestScore = score
      bestMove = [row, col]
    }
  }

  return bestMove
}
