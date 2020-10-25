import { colors, createMuiTheme } from "@material-ui/core"

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#18191F",
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: "#fff",
    },
  }
})
