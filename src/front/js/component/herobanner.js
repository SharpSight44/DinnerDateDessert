import React from "react";
import banner from "../../img/banner.png";

export const HeroBanner = () => {
  return (
    <div className="container">
      <div className="hero-banner">
        <div className="row">
          <div className="col">
            <div className="homebanner">
              <img src={banner} alt="Banner" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1>Allow us to curate your next memory to last a lifetime</h1>
              <h3>Dinner Date Dessert is your premiere date curating service. Based on a quick and easy questionnaire, we will create the perfect date experience that you have in mind, based on occasion and preferences set by you!</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
