import React from "react";
import banner from "../../img/banner.png";
import couplevid from "../../Videos/couplevid.mp4";

export const HeroBanner = () => {
  return (
    <div className="container">
      <div className="hero-banner rounded justify-content-center">
        <div className="row g-0">
          <div className="col-md">
            <div className="homebanner">
              <video className="fluid-video" style={{width:"975px"}} autoPlay muted loop playsinline>
                <source src={couplevid} type="video/mp4" />
              </video>
            
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
