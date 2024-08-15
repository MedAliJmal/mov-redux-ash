import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/action";

const AddMovie = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //_________________________________________________________________
  // Movie input STATES :
  const [name, setName] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [rating, setRating] = useState(0);
  const [date, setDate] = useState("");
  // Functions
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      name: name,
      image: imageurl,
      date: date,
      rating: rating,
    };
    dispatch(addMovie(newMovie));
    setDate("");
    setImageurl("");
    setName("");
    setRating(0);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT MOVIE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={handleSubmit}
          >
            <label htmlFor="">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Image URL:</label>
            <input
              type="text"
              value={imageurl}
              onChange={(e) => setImageurl(e.target.value)}
            />
            <label htmlFor="">Date:</label>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label htmlFor="">Rating:</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            <Button variant="primary" onClick={handleClose} type="submit">
              Confirm
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
