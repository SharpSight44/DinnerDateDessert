import React from "react";
import logosize300x268 from "../../img/logosize300x268.jpg";
import { Navbar } from "../component/navbar";

export const About = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="aboutbackground">
                    <div className="row">
                        <div className="col-4">
                            <img src={logosize300x268} alt="logo" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <p>Dinner Date Dessert is a premiere production of the 3D Geek Team.
                                Incepted in Spring of 2022 Our vision is to create a simple all-encompassing App that can custom-tailor you multiple mini-itineraries for  Weekend Plans, Date nights, Special occasions, travels to new city..
                                Let our team take the stress out of finding and coordinating the perfect Saturday with the family. Or first date ideas, maybe a staycation that needs some excitement. Or even better a new city that needs your discovering.. We are here for you!
                                We will bring personalized options to you. Specific to location, occasion, time of day, personal preferences and much more. We bring you options that make your choice simple so that you can Enjoy and create new core memories!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};