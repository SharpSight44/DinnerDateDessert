import React from "react";
import logosize300x268 from "../../img/logosize300x268.jpg";
import { Navbar } from "../component/navbar";
import "../../styles/about.css";
import KarinOhana from "../../img/KarinOhana.png";
import ErinLash from "../../img/ErinLash.png";
import LeoEstrella from "../../img/LeoEstrella.png";


export const About = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="aboutbackground">
                    <div className="row g-0">
                        <div className="logodiv col-md-6">
                            <div className="d-flex justify-content-center">
                                <img src={logosize300x268} className="logo" alt="logo" />
                            </div>
                            <div className="vision-statement rounded g-0">
                                <p>Dinner Date Dessert is a premiere production of the 3D Geek Team.
                                    Incepted in Spring of 2022, our vision was to create a simple, all-encompassing App that would provide custom-tailored mini-itineraries for your weekend plans, date nights, special occasions, even travels to a new city.
                                    Let our team take the stress out of finding and coordinating the perfect Saturday with the family, first date ideas, maybe a staycation that needs some excitement. Or even better a new city that needs your discovering... We are here for you!
                                    We will bring personalized options to you. Specific to location, occasion, time of day, personal preferences and much more. We bring you options that make your choice simple so that you can enjoy and create new core memories!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="karinblurb">
                                <img src={KarinOhana} className="Karinimg" alt="KarinBlurb" />
                            </div>
                            <div className="erinblurb">
                                <img src={ErinLash} className="Erinimg" alt="ErinBlurb" />
                            </div>
                            <div className="leoblurb">
                                <img src={LeoEstrella} className="Leoimg" alt="LeoBlurb" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <div className="row g-0">
                    <div className="col-md-5">
                        <div className="vision-statement rounded">
                            <p>Dinner Date Dessert is a premiere production of the 3D Geek Team.
                                Incepted in Spring of 2022, our vision was to create a simple, all-encompassing App that would provide custom-tailored mini-itineraries for your weekend plans, date nights, special occasions, even travels to a new city.
                                Let our team take the stress out of finding and coordinating the perfect Saturday with the family, first date ideas, maybe a staycation that needs some excitement. Or even better a new city that needs your discovering... We are here for you!
                                We will bring personalized options to you. Specific to location, occasion, time of day, personal preferences and much more. We bring you options that make your choice simple so that you can enjoy and create new core memories!
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};