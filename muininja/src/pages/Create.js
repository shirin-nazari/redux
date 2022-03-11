import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import AcUnitIcon from "@mui/icons-material/AcUnit";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
const useStyles = makeStyles({
  title: {
    marginBottom: 20,
  },
  field: {
    marginTop: 50,
    marginBottom: 100,
    display: "block",
  },
});
export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    if (title === "") setTitleError(true);
    if (details === "") setDetailsError(true);
    if (title && details) {
      console.log(title, details);
    }
  };

  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h6"
        component="h2"
        color="GrayText"
        gutterBottom
      >
        Create a New Notes
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note Title"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />
        <Button
          className={classes.btn}
          type="submit"
          color="secondary"
          variant="contained"
          startIcon={<SendIcon />}
          endIcon={<KeyboardArrowRightIcon />}
          disableElevation
        >
          submit
        </Button>{" "}
      </form>
      {/* <AcUnitIcon color="secondary" fontSize="small" />
      <AcUnitIcon color="action" fontSize="large" />
      <AcUnitIcon color="error" fontSize="small" /> */}
      {/* <Button type="submit" variant="outlined">
        submitted
      </Button> */}
    </Container>
  );
}
