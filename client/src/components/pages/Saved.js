import React, { useState, useEffect } from "react";
import axios from "axios";

const Saved = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    axios.get("/api/books").then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      {allBooks.map((i) => (
        <p>{i}</p>
      ))}
      <h1>test</h1>
    </div>
  );
};

export default Saved;