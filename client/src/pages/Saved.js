import React, { useState, useEffect } from "react";
import axios from "axios";
// import { set } from "mongoose";

const Saved = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    axios.get("/api/books").then((response) => {
    //   console.log(response.data);
    setAllBooks(response.data);
    });
  }, []);

  return (
    <div>
      {allBooks.map((i) => (
        <>
        <p>{i.title}</p>
        <p>{i.authors}</p>
        </>
      ))}
    </div>
  );
};

export default Saved;