import React from "react";
import banner from "../../img/banner.png";

export const HeroBanner = () => {
  return (
    <div className="container">
      <div className="hero-banner rounded justify-content-center">
        <div className="row g-0">
          <div className="col-md">
            <div className="homebanner">
              <img src={banner} alt="Banner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
