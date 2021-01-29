import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  const [title, setTitle] = useState("Type a title");
  useEffect(() => {
    document.title = title;
  });
  if (title === "") {
    setTitle("Title typing");
  }
  return (
    <div className="app flex">
      <Header />
      <div className="flex typer">
        <h1 className="title">{title}</h1>
        <input className="input" onInput={(e) => setTitle(e.target.value)} />
      </div>
      <Footer />
    </div>
  );
}
