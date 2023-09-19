import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={5}
      >
        <Typography
          sx={{
            fontFamily: "cursive",
            fontSize: "28px",
            fontWeight: "bold",
            color: "blue",
            marginBottom: "10px",
          }}
          variant="h2"
        >
          This is the CRUD Application
        </Typography>
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: "24px",
            color: "green",
          }}
          variant="h3"
        >
          Developed by Jameen Raj
        </Typography>
      </Box>
    </div>
  );
};

export default About;
