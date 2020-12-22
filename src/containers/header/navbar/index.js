import React from "react";
import "./style.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <p className="navbar__label" style={{ color: "grey", cursor: "default" }}>
        Navigate
      </p>
      <p className="navbar__label">My Products</p>
      <a className="navbar__label" href="mailto:theindianappguy@gmail.com">
        Email ME
      </a>
    </div>
  );
}
