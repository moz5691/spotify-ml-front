import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px",
    width: 200 + theme.spacing(3) * 2,
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
  },
}));

export default function BarChart({ predict }) {
  const classes = useStyles();

  if (!predict.probability) {
    return <div></div>;
  }
  const chartData = [
    { popularity: "low", probability: predict.probability[0] },
    { popularity: "mid", probability: predict.probability[1] },
    { popularity: "high", probability: predict.probability[2] },
  ];

  return (
    <Paper className={classes.root}>
      <Chart data={chartData}>
        <ArgumentAxis />
        <ValueAxis max={3} />

        <BarSeries valueField="probability" argumentField="popularity" />
        <Title text="Prediction" />
        <Animation />
      </Chart>
    </Paper>
  );
}
