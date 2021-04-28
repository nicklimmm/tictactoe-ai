import { useContext } from "react"
import {
  Button,
  ButtonGroup,
  Grid,
  Card,
  CardHeader,
  Typography,
  Container,
} from "@material-ui/core"
import { ModeContext } from "../../App"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "12px",
  },
  grid: {
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
})

const ModeButton = ({ onClick, children, ...others }) => {
  return (
    <Button
      size="small"
      // style={{ margin: "5px" }}
      onClick={onClick}
      {...others}
    >
      {children}
    </Button>
  )
}

const Menu = () => {
  const classes = useStyles()
  const { setMode } = useContext(ModeContext)

  // Returns function
  const play = (mode) => {
    return () => setMode(mode)
  }

  return (
    <Grid className={classes.grid} container>
      <Card variant="outlined">
        <CardHeader
          title={
            <Typography align="center" variant="h4">
              Welcome to TicTacToe AI
            </Typography>
          }
        ></CardHeader>
        <Container className={classes.buttonContainer}>
          <ButtonGroup
            orientation="vertical"
            color="primary"
            variant="contained"
          >
            <ModeButton onClick={play("HH")}>Human vs Human</ModeButton>
            <ModeButton onClick={play("E")}>Easy</ModeButton>
            <ModeButton onClick={play("M")}>Medium</ModeButton>
            <ModeButton onClick={play("H")}>Hard</ModeButton>
            <ModeButton onClick={play("I")}>Impossible</ModeButton>
          </ButtonGroup>
        </Container>
      </Card>
    </Grid>
  )
}

export default Menu
