import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Button
          component={Link}
          to="/books"
          sx={{
            marginTop: 15,
            backgroundColor:"oceanblue", 
            color: "white", 
            padding: "10px 20px", 
            borderRadius: "8px", 
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", 
            "&:hover": {
              backgroundColor: "darkblue", 
            },
          }}
          variant="contained"
        >
          <Typography variant="h6">Explore All Books</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
