import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Divider from "@material-ui/core/Divider";

import { green } from "@material-ui/core/colors";

import PopularFeatureSelection from "./PopularFeatureSelection";
// import PopularityResult from "./PopularityResult";
import BarChart from "./BarChart";
import PrettoSlider1 from "./PrettoSlider";
import GenreForm from "./GenreForm";
import ProgressBar from "./ProgressBar";
import DescriptionAndConclusion from "./DescriptionAndConclusion";

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
    textAlign: "center",
    margin: theme.spacing(2),
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
  const [loudness, setLoudness] = useState(-24);
  const [speechiness, setSpeechiness] = useState(0.5);
  const [genre, setGenre] = useState("");
  const [predict, setPredict] = useState({});
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const descriptionElementRef = useRef(null);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  useEffect(() => {
    setLoading(false);
  }, [predict]);

  useEffect(() => {
    setAcousticness(0.5);
    setDanceability(0.5);
    setEnergy(0.5);
    setInstrumentalness(0.5);
    setLiveness(0.5);
    setLoudness(-24);
    setSpeechiness(0.5);
    // setLoading(true);
  }, [genre]);

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
      <Divider />
      <div className={classes.button}>
        <ColorButton
          variant="contained"
          color="primary"
          onClick={() => handleSubmit()}
          disabled={!genre}
        >
          Predict
        </ColorButton>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <ColorButton
          onClick={handleClickOpen("paper")}
          color="primary"
          variant="contained"
        >
          Epilogue
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
              value={acousticness}
            />
            <PrettoSlider1
              handleEvent={setDanceability}
              title={"Danceability"}
              a={1}
              b={100}
              c={0}
              value={danceability}
            />
            <PrettoSlider1
              handleEvent={setEnergy}
              title={"Engery"}
              a={1}
              b={100}
              c={0}
              value={energy}
            />
            <PrettoSlider1
              handleEvent={setInstrumentalness}
              title={"Instrumentalness"}
              a={1}
              b={100}
              c={0}
              value={instrumentalness}
            />
            <PrettoSlider1
              handleEvent={setLiveness}
              title={"Liveness"}
              a={1}
              b={100}
              c={0}
              value={liveness}
            />
            <PrettoSlider1
              handleEvent={setLoudness}
              title={"Loudness"}
              a={0.557}
              b={1}
              c={-52}
              value={loudness}
            />
            <PrettoSlider1
              handleEvent={setSpeechiness}
              title={"Speechiness"}
              a={1}
              b={100}
              c={0}
              value={speechiness}
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

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        fullWidth={true}
        maxWidth={"lg"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          Process and Conclusion
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <DescriptionAndConclusion />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
