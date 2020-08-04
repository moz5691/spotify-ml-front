import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { green } from "@material-ui/core/colors";

import PopularFeatureSelection from "./PopularFeatureSelection";
// import PopularityResult from "./PopularityResult";
import BarChart from "./BarChart";
import PrettoSlider1 from "./PrettoSlider";
import GenreForm from "./GenreForm";
import ProgressBar from "./ProgressBar";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const baseURL = process.env.REACT_APP_BASE_URL;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px",
    // width: 300 + theme.spacing(3) * 2,
    flexGrow: 1,
  },
  margin: {
    height: theme.spacing(3),
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100%",
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);

export default function Popularity() {
  const classes = useStyles();

  const [acousticness, setAcousticness] = useState(0.5);
  const [danceability, setDanceability] = useState(0.5);
  const [energy, setEnergy] = useState(0.5);
  const [instrumentalness, setInstrumentalness] = useState(0.5);
  const [liveness, setLiveness] = useState(0.5);
  const [loudness, setLoudness] = useState(0.5);
  const [speechiness, setSpeechiness] = useState(0.5);
  const [genre, setGenre] = useState("");
  const [predict, setPredict] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [predict]);

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleSubmit = async () => {
    console.log("handle submit");
    setLoading(true);
    const features = {
      acousticness,
      danceability,
      energy,
      instrumentalness,
      liveness,
      loudness,
      speechiness,
      genre,
    };

    try {
      const res = await axios.post(`${baseURL}/popularity`, features);
      console.log("features --->", features);
      console.log("response --->", res);
      await delay(1000);
      setPredict(res.data);
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  return (
    <div className={classes.root}>
      <h1>Popularity Prediction</h1>
      <h4>Wait for seconds if you don't see result. Server may be in sleep.</h4>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <ColorButton
          variant="contained"
          color="primary"
          onClick={() => handleSubmit()}
          disabled={!genre}
        >
          Predict
        </ColorButton>
      </div>

      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <PrettoSlider1
              handleEvent={setAcousticness}
              title={"Acousticness"}
              a={1}
              b={100}
              c={0}
            />
            <PrettoSlider1
              handleEvent={setDanceability}
              title={"Danceability"}
              a={1}
              b={100}
              c={0}
            />
            <PrettoSlider1
              handleEvent={setEnergy}
              title={"Engery"}
              a={1}
              b={100}
              c={0}
            />
            <PrettoSlider1
              handleEvent={setInstrumentalness}
              title={"Instrumentalness"}
              a={1}
              b={100}
              c={0}
            />
            <PrettoSlider1
              handleEvent={setLiveness}
              title={"Liveness"}
              a={1}
              b={100}
              c={0}
            />
            <PrettoSlider1
              handleEvent={setLoudness}
              title={"Loudness"}
              a={0.557}
              b={1}
              c={-52}
            />
            <PrettoSlider1
              handleEvent={setSpeechiness}
              title={"Speechiness"}
              a={1}
              b={100}
              c={0}
            />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            {" "}
            <GenreForm genre={genre} handleGenreChange={handleGenreChange} />
            <PopularFeatureSelection
              acousticness={acousticness}
              danceability={danceability}
              energy={energy}
              instrumentalness={instrumentalness}
              liveness={liveness}
              loudness={loudness}
              speechiness={speechiness}
              genre={genre}
            />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            {loading && predict ? (
              <ProgressBar />
            ) : (
              <>
                {/* <PopularityResult predict={predict} /> */}
                <BarChart predict={predict} />
              </>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
