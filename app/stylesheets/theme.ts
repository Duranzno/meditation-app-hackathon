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
  },
  overrides: {
    MuiDrawer: {
      paperAnchorRight: {
        borderLeft: "2px solid #000000",
        boxSizing: "border-box",
        borderRadius: "18px 0px  0px 18px",
      },
      paperAnchorDockedLeft: {

        borderRight: "2px solid #000000",
        boxSizing: "border-box",
        borderRadius: "0px 18px 18px 0px",
      }
    }
  }
})
