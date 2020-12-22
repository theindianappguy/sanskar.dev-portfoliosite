import React from "react";
import "./style.css";

export default function Button({ label, url, withoutBorder }) {
  return (
    <div className="button">
      <a
        style={{ border: withoutBorder ? "none" : "1.2px solid grey" }}
        className="button__a"
        href={url}
        target="_blank"
      >
        {label}
        <span className="button__arrow" style={{ marginLeft: "6px" }}>
          →
        </span>
      </a>
    </div>
  );
}
