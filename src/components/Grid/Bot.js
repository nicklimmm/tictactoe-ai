import { randomMove, smartMove } from "./GridHelper"

export const botMove = (grid, mode) => {
  switch (mode) {
    case "E":
      return randomMove(grid)
    case "M":
      return Math.random() < 0.15 ? randomMove(grid) : smartMove(grid)
    case "H":
      return Math.random() < 0.35 ? randomMove(grid) : smartMove(grid)
    default:
      return smartMove(grid)
  }
}
