import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [title, setTitle] = useState("Title typing");
  useEffect(() => {
    document.title = title;
  });
  if (title === "") {
    setTitle("Title typing");
  }
  return (
    <div className="app">
      <h1 className="title">{title}</h1>
      <input className="input" onInput={(e) => setTitle(e.target.value)} />
    </div>
  );
}
