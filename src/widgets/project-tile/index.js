import React from "react";
import "./style.css";
import Button from "../button";

export default function ProjectTile({
  name,
  imgUrl,
  desc,
  year,
  categorie,
  links,
  url,
  colorCode,
}) {
  return (
    <div className="project_tile" style={{ backgroundColor: `#${colorCode}` }}>
      <div className="project_tileLeft">
        <img className="project_tile_img" src={imgUrl} />
      </div>
      <div className="project_tileRight">
        <div>
          <p className="project_tileTitle">{name}</p>
          <p className="project_tileDesc">{desc}</p>
        </div>
        {links &&
          links.map((linkInfo) =>
            linkInfo?.label ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <a
                  style={{
                    border: "none",
                    padding: "6px 0px",
                    fontSize: "14px",
                    maxWidth: "200px",
                  }}
                  className="button__a"
                  href={linkInfo.link}
                  target="_blank"
                >
                  <span style={{ marginRight: "6px" }}>→</span>
                  {linkInfo.label}
                </a>
              </div>
            ) : (
              <></>
            )
          )}
        <div style={{ marginTop: "16px" }}>
          <Button label="Learn More" url={url} />
        </div>
      </div>
    </div>
  );
}
