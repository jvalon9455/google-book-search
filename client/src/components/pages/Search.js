import React, { useState } from "react";
import API from "../../utils/API";
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
      <form>
        <input
          type="text"
          onChange={handleInputChange}
          name="title"
          value={titleState}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {results.map((res) => (
        <Result title={res.volumeInfo.title} />
      ))}
    </div>
  );
};

export default Search;