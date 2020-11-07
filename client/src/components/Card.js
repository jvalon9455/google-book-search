import Axios from "axios";
import React from "react";

const Card = (props) => {
  const handleDelete = (e) => {
    const id = e.target.getAttribute("id");
    // console.log("clicked");

    Axios.delete(`/api/books/${id}`).then((res) => {
      console.log(res);
      props.renderBooks();
    });
  };

  const handleView = () => {
    let path = props.link;
    window.open(path);
  };
  return (
    <div
      className="row"
      style={{ border: "1px solid black", position: "relative" }}
    >
      <div className="col-12">
        <img src={props.image} style={{ float: "left" }} />
        <h4>{props.title}</h4>
        <h5>{props.authors}</h5>
        <p>{props.description}</p>
        <button
          id={props.id}
          onClick={handleDelete}
          style={{ position: "absolute", top: "0", right: "0" }}
        >
          Delete
        </button>
        <button
          onClick={handleView}
          style={{ position: "absolute", top: "0", right: "5.5%" }}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default Card;
