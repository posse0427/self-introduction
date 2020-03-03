import React from "react";
import "./App.css";
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider
} from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "./Theme";
import Menu from "./components/bar/Menu";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <StylesProvider>
        <MaterialThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <Router>
              <Menu />
            </Router>
          </StyledThemeProvider>
        </MaterialThemeProvider>
      </StylesProvider>
    </div>
  );
};

export default App;
