import React, { useState } from "react";
import axios from "axios";


const Result = (props) => {
  const [savedBook, setSavedBook] = useState([]);
  const [state, setState] = useState({
    title: props.title,
    authors: props.authors,
    description: props.description,
    image: props.image,
    link: props.link,
  });

  const handleSave = (e) => {
    // console.log(e.target.find("p"));

    axios.post("/api/books", state).then((res) => {
      console.log(res);
    });
  };
  const handleView = (e) => {
    let path =state.link;
    window.open(path);
  };

  return (
     <div style={{ border: "1px solid black", position: "relative" }}>
       <img src={props.image} />
      <p>{props.title}</p>
      <p>{props.authors}</p>
      <p>{props.description}</p>
      <button
        onClick={handleSave}
        style={{ position: "absolute", top: "0", right: "5%" }}
      >
        Save
      </button>
      <button
        onClick={handleView}
        style={{ position: "absolute", top: "0", right: "0" }}
      >
        View
      </button>
    </div>
  );
};

export default Result;