import { GameProvider } from "../../providers/GameProvider"
import Grid from "../Grid/Grid"
import EndModal from "../EndGameModal/EndGameModal"

const Game = () => {
  return (
    <GameProvider>
      <EndModal></EndModal>
      <Grid />
    </GameProvider>
  )
}

export default Game
