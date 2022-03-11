import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import AcUnitIcon from "@mui/icons-material/AcUnit";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
const useStyles = makeStyles({
  btn: {
    fontSize: 60,

    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    "&:hover": {
      background: "red",
      fontSize: 80,
    },
  },
  title: {
    marginBottom: 20,
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});
export default function Create() {
  const classes = useStyles();
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
      <form noValidate autoComplete="off">
        <TextField
          className={classes.field}
          label="Note Title"
          color="secondary"
          fullWidth
          required
        />
        <TextField
          className={classes.field}
          label="Details"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
        />
      </form>
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
      {/* <AcUnitIcon color="secondary" fontSize="small" />
      <AcUnitIcon color="action" fontSize="large" />
      <AcUnitIcon color="error" fontSize="small" /> */}
      {/* <Button type="submit" variant="outlined">
        submitted
      </Button> */}
    </Container>
  );
}
