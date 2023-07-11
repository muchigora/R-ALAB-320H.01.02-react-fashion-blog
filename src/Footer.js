import React from "react";
import Nav from "./Nav";
import './index.css';

export default function Footer() {
  return (
    <div>
      <footer>
        <Nav pos="footer" />
        <div className="copyright">&copy; 2023 T.S Hutch LLC</div>
      </footer>
    </div>
  );
}
