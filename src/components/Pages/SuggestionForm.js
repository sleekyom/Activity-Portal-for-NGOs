import React, { useState, useEffect } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { firestore } from "../../firebase/db";
import { selectCurrentUser } from "../../redux/user/userSelector";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./SuggestionForm.css";

export default function Suggestionform() {
  const [formState, setFormstate] = useState({
    title: "",
    message: "",
  });
  const { currentUser } = useSelector(
    createStructuredSelector({
      currentUser: selectCurrentUser,
    })
  );

  const { title, message } = formState;

  const [collection, setCollection] = useState(null);

  useEffect(() => {
    setCollection(getCollection());
  }, []);

  const getCollection = () => {
    return firestore.collection("suggestions");
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormstate({ ...formState, [name]: value });
  };

  const handleSave = () => {
    if (currentUser) {
      collection
        .add({
          title,
          message,
          userId: currentUser.id,
          createdDate: Date.now(),
          fileUrl: "",
        })
        .then((res) => {
          console.log(res);
          console.log("add");
          setFormstate({
            title: "",
            message: "",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <div className="container">
        <label htmlFor="basic-url">Suggestion Form</label>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quia
          placeat odit maiores incidunt, iste accusantium? Fugiat velit esse
          iure odio corporis, repudiandae tenetur rem suscipit non ratione modi
          ipsa.
        </p>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="title"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            name="title"
            onChange={handleChange}
            value={title}
          />
        </InputGroup>

        <InputGroup>
          <FormControl
            as="textarea"
            name="message"
            placeholder="Enter your suggestion here"
            aria-label="With textarea"
            onChange={handleChange}
            value={message}
          />
        </InputGroup>
        <Button
          className="btn1"
          variant="outline-dark"
          disabled={!title || !message}
          onClick={handleSave}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
