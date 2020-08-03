import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(name, value) {
  return { name, value };
}

const popularity = ["Unpopular", "Mid popular", "Popular"];

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

export default function PopularityResult({ predict }) {
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

  const rows = [
    createData(popularity[0], predict.probability[0]),
    createData(popularity[1], predict.probability[1]),
    createData(popularity[2], predict.probability[2]),
  ];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Class</TableCell>
            <TableCell align="right">Probability</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.value.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
