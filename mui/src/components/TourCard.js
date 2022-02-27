import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AccessTime } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
            background: "pink",
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

export default function TourCard({ tour }) {
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
      <ThemeProvider theme={theme}>
        <Paper elevation={3} square>
          <img src={tour.image} alt="" className="img" />
          {/* componeent for element make tag inside to site and variant for size /////////for typography*/}
          {/* paddigX for left and right  */}
          {/* paddingY for top and bottom */}
          <Box paddingX={1}>
            {" "}
            <Typography variant="subtitle1" component="h2">
              {tour.name}
            </Typography>{" "}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {" "}
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.duration} hours
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              marginTop={3}
            >
              {/* precision for nim of half star  */}
              <Rating
                name="read-only"
                value={tour.rating}
                readOnly
                precision={0.5}
                size="small"
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.rating}
              </Typography>
              <Typography variant="body3" component="p" marginLeft={0.5}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h3" marginTop={0}>
                from C ${tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
}
