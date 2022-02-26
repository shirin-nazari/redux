import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
export default function TourCard() {
  return (
    //   Paper
    //   variant for outline becuase dont box-shadow
    // <Paper variant="outlined" square>
    // square => for gerd shodn akhar box
    // elevarion for box shadow
    /////////////////////////////
    // grid item xs for size card
    <Grid item xs={3}>
      {" "}
      <Paper elevation={3} square>
        TourCard
      </Paper>
    </Grid>
  );
}
