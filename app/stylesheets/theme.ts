import { colors, createMuiTheme } from "@material-ui/core"

export const theme = createMuiTheme({
  palette: {
    primary: {
      // #36ab9c
      main: "#FFBD12",
      "100": "#FFD465"
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
