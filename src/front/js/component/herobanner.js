import React from "react";
import banner from "../../img/banner.png";

export const HeroBanner = () => {
  return (
    <div className="container">
      <div className="hero-banner rounded">
        <div className="row">
          <div className="col">
            <div className="homebanner">
              <img src={banner} alt="Banner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
