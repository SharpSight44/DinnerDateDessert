import React from "react";
import banner from "../../img/banner.png";
import couplevid2 from "../../Videos/couplevid2.mp4";

export const HeroBanner = () => {
  return (
    <div className="container-fluid">
      <div className="hero-banner rounded justify-content-center">
        <div className="row g-0">
          <div className="col-md">
            <div className="homebanner">
              <video className="fluid-video rounded float-start" style={{ width: "930px" }} autoPlay muted loop playsinline>
                <source src={couplevid2} type="video/mp4" />
              </video>
              <div>
                <p className="ddddescription text-white text-center">
                  At Dinner Date Dessert, we believe that planning your special outing should be quick and hassle-free. That's why we built a platform designed with you in mind. Allow us to curate your next perfect date, and save you from all the unnecessary headache that comes along with planning. Because life is short.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};
