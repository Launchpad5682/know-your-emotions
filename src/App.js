import React, { useState } from "react";
import "./styles.css";
import { emojiDictionary } from "./resource";

const emojis = Object.keys(emojiDictionary);

function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Meaning will appear here");

  const title = "Inside Outtttt";

  function changeHandler(event) {
    const inputEmoji = event.target.value;

    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("Failed to recognize the emoji");
    }
  }

  function clickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>{title}</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search for emoji"}
        style={{
          padding: "1em",
          minWidth: "80%",
        }}
      ></input>
      <h2>{emoji}</h2>
      <h3>{meaning}</h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => clickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}

export default App;
