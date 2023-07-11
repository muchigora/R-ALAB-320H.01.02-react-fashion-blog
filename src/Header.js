import React from "react";
import Nav from "./Nav";
import './index.css';

export default function Header() {
  return (
    <div>
      <header>
        <h1>Sartre's List</h1>
        <h2>Better-Dressed People</h2>
        <Nav pos="header" />
      </header>
    </div>
  );
}
