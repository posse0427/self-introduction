import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      // 青色
      main: "#2196F3",
      dark: "#1976D2",
      light: "#BBDEFB"
    },
    secondary: {
      // オレンジ
      main: "#FF5722"
    },
    text: {
      // ちょっと薄い黒
      primary: "#212121",
      secondary: "#757575"
    }
  }
});

export default theme;
