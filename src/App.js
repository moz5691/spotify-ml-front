import React, { useState } from "react";
import axios from "axios";
import "./App.css";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import CloudOffIcon from "@material-ui/icons/CloudOff";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
import { green, red } from "@material-ui/core/colors";

import Popularity from "./components/Popularity";
import useInterval from "./hooks/useInterval";

const baseURL = process.env.REACT_APP_BASE_URL;

function App() {
  const [darkState, setDarkState] = useState(true);

  const [healthOk, setHealthOk] = useState(false);

  const palletType = darkState ? "dark" : "light";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const healthCheck = async () => {
    try {
      const res = await axios.get(`${baseURL}/ping`);
      console.log("response --->", res.status);
      res.status === 200 ? setHealthOk(true) : setHealthOk(false);
    } catch (err) {
      console.log(err);
    }
  };

  useInterval(() => {
    healthCheck();
  }, [5000]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Switch
          checked={darkState}
          onChange={handleThemeChange}
          color="secondary"
        />
        <div style={{ paddingRight: 20, paddingTop: 10 }}>
          {healthOk ? (
            <CloudQueueIcon style={{ color: green[500] }} />
          ) : (
            <CloudOffIcon style={{ color: red[500] }} />
          )}
        </div>
      </Grid>

      <Popularity />
    </ThemeProvider>
  );
}

export default App;
