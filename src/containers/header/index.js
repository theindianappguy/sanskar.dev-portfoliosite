import React from "react";
import "./style.css";
import Social from "../social";
import Button from "../../widgets/button";

export default function Header() {
  return (
    <div className="headerContainer">
      <div className="header">
        <div className="header__left">
          <div>
            <p className="header__subTitle" style={{ fontSize: "13px" }}>
              {`HELLO THERE! MY NAME IS`}
            </p>
            <p className="header__title">Sanskar Tiwari</p>
            <div className="header__subTitle">
              A Software Developer, serial indie maker, Speaker & Educator.
            </div>
            <p className="header__desc">
              Building Awesome software and teaching others to do the same.
            </p>

            <Social />

            <div style={{ marginTop: "24px" }}>
              <Button
                label="GET MY CV - LINKEDIN"
                url="https://www.linkedin.com/in/lamsanskar/"
              />
            </div>
          </div>
        </div>

        <div className="header__right">
          <img
            className="header__image"
            src="https://user-images.githubusercontent.com/55942632/102709898-91b52580-42d4-11eb-9b7b-fef36bf64e70.jpeg"
          />
        </div>
      </div>
    </div>
  );
}
