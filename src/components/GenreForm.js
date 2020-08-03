import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px",
    width: 300 + theme.spacing(3) * 2,
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
}));

export default function GenreForm({ genre, handleGenreChange }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleGenreClose = () => {
    setOpen(false);
  };

  const handleGenreOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button className={classes.button} onClick={handleGenreOpen}>
        Open the select
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Genre</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleGenreClose}
          onOpen={handleGenreOpen}
          value={genre}
          onChange={handleGenreChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Alternative"}>Alternative</MenuItem>
          <MenuItem value={"Anime"}>Anime</MenuItem>
          <MenuItem value={"Childrens"}>Childrens</MenuItem>
          <MenuItem value={"Classical"}>Classical</MenuItem>
          <MenuItem value={"Comedy"}>Comedy</MenuItem>
          <MenuItem value={"Country"}>Country</MenuItem>
          <MenuItem value={"Dance"}>Dance</MenuItem>
          <MenuItem value={"Electronic"}>Electronic</MenuItem>
          <MenuItem value={"Folk"}></MenuItem>
          <MenuItem value={"Hip-Hop"}>Hip-Hop</MenuItem>
          <MenuItem value={"Indie"}>Indie</MenuItem>
          <MenuItem value={"Jazz"}>Jazz</MenuItem>
          <MenuItem value={"Movie"}>Movie</MenuItem>
          <MenuItem value={"Opera"}>Opera</MenuItem>
          <MenuItem value={"Pop"}>Pop</MenuItem>
          <MenuItem value={"R&B"}>R&B</MenuItem>
          <MenuItem value={"Rap"}>Rap</MenuItem>
          <MenuItem value={"Reggae"}>Reggae</MenuItem>
          <MenuItem value={"Reggaeton"}>Reggaeton</MenuItem>
          <MenuItem value={"Rock"}>Rock</MenuItem>
          <MenuItem value={"Ska"}>Ska</MenuItem>
          <MenuItem value={"Soul"}>Soul</MenuItem>
          <MenuItem value={"Soundtrack"}>Soundtrack</MenuItem>
          <MenuItem value={"World"}>World</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
