import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px",
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(2),
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

// a / b * x + c
//

export default function CustomizedSlider({
  title,
  handleEvent,
  a,
  b,
  c,
  value,
}) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.margin} />
      <Typography gutterBottom>{title}</Typography>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={50}
        min={0}
        max={100}
        valueLabelFormat={(x) => (a * (x / b) + c).toFixed(2)}
        onChange={(e, value) => {
          console.log("value", (a * (value / b) + c).toFixed(2));
          handleEvent(a * (value / b) + c);
        }}
        value={(b * (value - c)) / a}
      />
    </>
  );
}
