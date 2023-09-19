import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState(0); // Set a default value for the active tab

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#2E3B4E" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
          <Typography variant="h5">
             BOOK SPOT
          </Typography>
        </NavLink>
        <Tabs
          value={value}
          onChange={(e, val) => setValue(val)}
          indicatorColor="primary"
        >
          <Tab
            component={NavLink}
            to="/"
            label="Home"
            sx={{ color: "white", textDecoration: "none" }}
          />
          <Tab
            component={NavLink}
            to="/add"
            label="Add Product"
            sx={{ color: "white", textDecoration: "none" }}
          />
          <Tab
            component={NavLink}
            to="/books"
            label="My Library"
            sx={{ color: "white", textDecoration: "none" }}
          />
          <Tab
            component={NavLink}
            to="/about"
            label="About Us"
            sx={{ color: "white", textDecoration: "none" }}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
