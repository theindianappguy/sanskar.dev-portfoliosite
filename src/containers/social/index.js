import React from "react";
import "./style.css";
import SocialTile from "./social-tile";

export default function Social() {
  return (
    <div className="social">
      <div style={{ color: "grey" }}>
        <p className="social__labelMain">
          Social <span style={{ marginLeft: "6px" }}>→</span>
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <SocialTile
          label="Youtube"
          url="https://www.youtube.com/SanskarTiwari"
        />
        <SocialTile
          label="Instagram"
          url="https://www.instagram.com/indianappguy/"
        />
        <SocialTile label="Github" url="https://github.com/theindianappguy" />
        <SocialTile
          label="Dribble"
          url="https://dribbble.com/theindianappguy"
        />
      </div>
    </div>
  );
}
