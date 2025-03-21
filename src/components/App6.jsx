import React from "react";
import { useState } from "react";

export default function App6() {
  const [hobby, setHobby] = useState([]);
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) {
      setError("Hobby cannot be empty!");
      return;
    }
    if (!hobby.includes(text)) {
      setHobby([...hobby, text]);
      setText("");
      setError("");
    } else {
      setError("Hobby already exists!");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your hobby"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <hr />
      {hobby && hobby.map((value, index) => <li key={index}>{value}</li>)}
    </div>
  );
}