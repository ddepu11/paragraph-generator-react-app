import "./App.css";
import { useState } from "react";
import data from "./data";

function App() {
  const [length, setLength] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  function handleChange(e) {
    setLength(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    let noOfParagraphsToShow = +e.target.length.value;

    if (noOfParagraphsToShow < 0) {
      setParagraphs(data.slice(0, 1));
    } else {
      setParagraphs(data.slice(0, noOfParagraphsToShow));
    }
  }

  return (
    <div className="container">
      <h1>Generate Dummy Text</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="length">Paragraphs:</label>
        <input
          type="number"
          id="length"
          value={length}
          onChange={handleChange}
          max="14"
        />
        <button type="submit">GENERATE</button>
      </form>
      <main>
        {paragraphs.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </main>
    </div>
  );
}

export default App;
