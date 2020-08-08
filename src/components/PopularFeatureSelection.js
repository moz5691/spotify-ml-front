import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

function createData(name, value) {
  return { name, value };
}

export default function PopularFeatureSelection({
  acousticness,
  danceability,
  energy,
  instrumentalness,
  liveness,
  loudness,
  speechiness,
  genre,
}) {
  const classes = useStyles();

  const rows = [
    createData("Acousticness", acousticness),
    createData("Danceability", danceability),
    createData("Energy", energy),
    createData("Instrumentalness", instrumentalness),
    createData("Liveness", liveness),
    createData("Loudness", loudness),
    createData("Speechiness", speechiness),
  ];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="medium" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Feature</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Selection</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
                {parseFloat(row.value).toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell component="th" scope="row">
              Genre
            </TableCell>
            <TableCell align="right">{genre}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
