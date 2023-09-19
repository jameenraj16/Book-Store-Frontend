import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";
const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`https://dark-gold-snapper-cuff.cyclic.cloud/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-content">
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h3>Rs.{price}</h3>
      </div>
      <div className="card-buttons">
        <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
          Update
        </Button>
        <Button color="error" onClick={deleteHandler}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Book;
