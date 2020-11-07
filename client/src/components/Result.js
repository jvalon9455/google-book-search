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
    let path = state.link;
    window.open(path);
  };

  return (
    <div>
      <div className="card mb-4">
        <div className="row">
          <div className="col-md-3">
            <img alt={props.title} className="img-fluid" src={props.image} />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">{props.title} by: {props.authors}</h5>
              <p>{props.description}</p>
            </div>
            <button
              onClick={handleSave}
              className="btn badge-pill btn-outline-warning mt-3 ml-3"
            >
              Save
            </button>
            <button
              onClick={handleView}
              className="btn badge-pill btn-outline-dark mt-3"
            >
              View
      </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;