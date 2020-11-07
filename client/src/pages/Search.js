import React, { useState } from "react";
import API from "../utils/API";
import Result from "./Result";

const Search = () => {
  const [titleState, setTitleState] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    let { value } = e.target;
    // console.log(value);
    setTitleState(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    API.getBook(titleState).then((res) => {
      console.log(res.data.items);
      setResults(res.data.items);
    });
  };

  return (
    <div>
      <form style={{ border: "0.5px solid black", marginBottom: "1%" }}>
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            name="title"
            value={titleState}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <div className="container">
        <h3>Results:</h3>
        <div className="row">
          <div className="col-12">
            {results.map((res) => (
              <Result
                title={res.volumeInfo.title}
                authors={res.volumeInfo.authors}
                description={res.volumeInfo.description}
                link={res.selfLink}
                image={res.volumeInfo.imageLinks.thumbnail}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;