import React, { useState } from "react";
import "./App.css";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Switch from "@material-ui/core/Switch";

import Popularity from "./components/Popularity";

function App() {
  const [darkState, setDarkState] = useState(true);
  const palletType = darkState ? "dark" : "light";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Switch
        checked={darkState}
        onChange={handleThemeChange}
        color="secondary"
      />
      <Popularity />
    </ThemeProvider>
  );
}

export default App;
