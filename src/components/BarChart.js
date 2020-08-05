import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
  Tooltip,
} from "@devexpress/dx-react-chart-material-ui";

import { Animation, EventTracker } from "@devexpress/dx-react-chart";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: theme.spacing(3),
    textAlign: "center",
  },
  margin: {
    top: theme.spacing(5),
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

const labelStyle = { fill: "#BBDEFB", fontSize: "1.5em" };

// const getPath = (x, width, y, y1) => `M ${x} ${y1}
//    L ${width + x} ${y1}
//    L ${width + x} ${y + 30}
//    L ${x + width / 2} ${y}
//    L ${x} ${y + 30}
//    Z`;

const getPath = (x, width, y, y1) => `M ${x} ${y1}
   L ${width + x} ${y1}
   L ${width + x} ${y}
   L ${x + width / 2} ${y}
   L ${x} ${y}
   Z`;

const BarWithLabel = ({
  arg,
  barWidth,
  maxBarWidth,
  val,
  startVal,
  color,
  value,
  style,
}) => {
  const width = maxBarWidth * barWidth;
  return (
    <React.Fragment>
      <path
        d={getPath(arg - width / 2, width, val, startVal)}
        fill={color}
        style={style}
      />
      <Chart.Label
        x={arg}
        y={(val + startVal) / 2}
        dominantBaseline="middle"
        textAnchor="middle"
        style={labelStyle}
      >
        {value.toFixed(0) + "%"}
      </Chart.Label>
    </React.Fragment>
  );
};

export default function BarChart({ predict }) {
  const classes = useStyles();

  if (!predict.probability) {
    return (
      <div>
        <h3>Instruction</h3>
        <div style={{ textAlign: "left" }}>
          <h4>* Select scales of music feasures</h4>
          <h4>* Select genre of music</h4>
          <h4>* Click on PREDICT button</h4>
          <h4>* Loudness unit is dB (decibel)</h4>
          <h4>* All other features are 0 to 1 scale</h4>
        </div>
      </div>
    );
  }
  const chartData = [
    {
      popularity: "Unpopular",
      probability: predict.probability[0] * 100,
    },
    {
      popularity: "Mid Popular",
      probability: predict.probability[1] * 100,
    },
    {
      popularity: "Popular",
      probability: predict.probability[2] * 100,
    },
  ];

  return (
    <div className={`${classes.root}  `}>
      {/* <Paper> */}
      <h2>Prediction (%)</h2>
      <Chart data={chartData}>
        <ArgumentAxis />
        <ValueAxis max={7} />

        <BarSeries
          valueField="probability"
          argumentField="popularity"
          pointComponent={BarWithLabel}
        ></BarSeries>
        {/* <Title text="Prediction (%)" /> */}
        <Animation />
        <EventTracker />
        <Tooltip />
      </Chart>
      {/* </Paper> */}
    </div>
  );
}
