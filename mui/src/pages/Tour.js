import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import ImageCollage from "../components/ImageCollage";

export default function Tour() {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore The World
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://th-thumbnailer.cdn-si-edu.com/vSnitgUqCQCRSx7mkHZtHZHry4U=/1072x720/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg"
          alt=""
          height={325}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
      </Box>
    </Container>
  );
}
