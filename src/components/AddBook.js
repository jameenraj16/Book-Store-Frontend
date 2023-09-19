import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "",
    image: "",
  });
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios.post("https://dull-erin-turtle-kilt.cyclic.cloud/books", {
      name: String(inputs.name),
      author: String(inputs.author),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
      available: Boolean(checked),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendRequest();
    history("/books");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 400,
          margin: "0 auto",
          marginTop: 5,
          padding: 10,
          border: "1px solid #ccc",
          borderRadius: 8,
          boxShadow: "10px 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography align="center" variant="h5" >
          Add Book
        </Typography>
        <br />

        <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          placeholder="Name"
          fullWidth
          variant="outlined"
          name="name"
        />
          
          <TextField
            value={inputs.author}
            onChange={handleChange}
            margin="normal"
            placeholder="Author"
            fullWidth
            variant="outlined"
            name="author"
          />
    
          <TextField
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            placeholder="Description"
            fullWidth
            variant="outlined"
            name="description"
          />

          <TextField
            value={inputs.price}
            onChange={handleChange}
            type="number"
            placeholder="Price"
            margin="normal"
            fullWidth
            variant="outlined"
            name="price"
          />
          <TextField
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            placeholder="Image"
            fullWidth
            variant="outlined"
            name="image"
          />
          <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ marginTop: 5, backgroundColor: "#007bff", color: "white" }}
        >
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;