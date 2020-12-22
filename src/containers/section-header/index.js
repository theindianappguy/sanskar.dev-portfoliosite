import React from "react";
import "./style.css";

export default function SectionHeader({ title, desc }) {
  return (
    <div className="sectionHeader">
      <p className="sectionHeader__title">{title}</p>
      <p className="sectionHeader__desc">{desc}</p>
    </div>
  );
}
