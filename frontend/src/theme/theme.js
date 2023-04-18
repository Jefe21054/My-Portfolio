import { createTheme } from "@mui/material/styles";
import components from "./components";
import typography from "./typography";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgb(69, 132, 182)",
      dark: "rgb(47, 106, 217)",
      light: "rgb(70, 125, 227)",
      contrastText: "rgb(255, 255, 255)",
    },
    secondary: {
      main: "rgb(255, 212, 59)",
      dark: "rgb(69, 132, 182)",
      light: "rgb(255, 183, 77)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    text: {
      primary: "rgb(48, 105, 152)",
      secondary: "rgb(100, 100, 100)",
    },
    background: {
      default: "rgb(207, 207, 207)",
      paper: "rgb(255, 232, 115)",
    },
    divider: "rgb(207, 207, 207)",
    alternate: {
      main: "rgb(247, 250, 255)",
      dark: "rgb(237, 241, 247)",
    },
    cardShadow: "rgba(23, 70, 161, .11)",
  },
  typography: typography,
  components: components,
});

export default theme;