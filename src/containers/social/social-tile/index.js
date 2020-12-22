import React from "react";
import "./style.css";

export default function SocialTile({ label, url, colorCode }) {
  return (
    <div className="socialTile" style={{ backgroundColor: `#${colorCode}` }}>
      <a href={url} className="social__label">
        {label}
      </a>
    </div>
  );
}
