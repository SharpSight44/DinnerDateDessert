import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/explore.css";
import { getApiRestaurants, getApiDesserts, getApiEvents } from '../component/apiExplore';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsFillHeartFill } from "react-icons/bs";
import { BiHeartCircle } from "react-icons/bi";
import { RiHeartsLine } from "react-icons/ri";


export const ExploreComponent = () => {
    const { store, actions } = useContext(Context);
    const [restaurants, setRestaurants] = useState([]);
    const [events, setEvents] = useState([]);
    const [desserts, setDesserts] = useState([]);
    console.log(store.desires);
    console.log(events);
    console.log(restaurants);



    const slideLeft = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }

    const slideLeftTwo = () => {
        const slider = document.getElementById('slider2')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRightTwo = () => {
        const slider = document.getElementById('slider2')
        slider.scrollLeft = slider.scrollLeft + 500
    }

    const slideLeftThree = () => {
        const slider = document.getElementById('slider3')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRightThree = () => {
        const slider = document.getElementById('slider3')
        slider.scrollLeft = slider.scrollLeft + 500
    }

    useEffect(() => {
        const fn = async () => {
            const apiRest = await getApiRestaurants();
            return setRestaurants(apiRest);
        };
        fn();
    }, []);
    useEffect(() => {
        const fn = async () => {
            const apiParty = await getApiEvents();
            return setEvents(apiParty);
        };
        fn();
    }, []);
    useEffect(() => {
        const fn = async () => {
            const apiDess = await getApiDesserts();
            return setDesserts(apiDess);
        };
        fn();
    }, []);


    // addDesire={actions.addDesire}
    return (
        <>

            <div className='container'>
                <h1 className="pagetitle text-center">Explore </h1>
                <Link to="/desires"><button>Click Me</button></Link>
                <div className='mb-3'>
                    <h1 className="categories">A Bite to Eat</h1>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="leftarrow rounded-circle justify-content-start"><BsFillArrowLeftCircleFill onClick={slideLeft} /></div>
                        <div id="slider" className='row scroll overflow-x-scroll whitespace-nowrap scroll-smooth m-0 '>{restaurants.map((item, index) =>
                            <div className="card explorecard text-white text-end fw-bolder mx-2 bg-transparent border-0" key={index} style={{ width: "300px" }} >
                                <img src={item?.image_url} className="card-img" alt="..." style={{ width: "300px" }} />
                                <div className="card-img-overlay d-flex align-items-end justify-content-between">
                                    <button onClick={() => actions.editDesires(item)} className="favsicon bg-transparent border-0 d-flex justify-content-start rounded-circle border border-dark">♡</button>
                                    <a className='locationname' href={item.url}><h2 className='locationname'>{item?.name} </h2></a>
                                </div>
                            </div>
                        )}
                        </div>
                        <div className="rightarrow rounded-circle justify-content-end"><BsFillArrowRightCircleFill onClick={slideRight} />
                        </div>
                    </div>
                </div>


                <div className='mb-3'>
                    <h1 className="categories">Activities</h1>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="leftarrow rounded-circle justify-content-start"><BsFillArrowLeftCircleFill onClick={slideLeftTwo} /></div>
                        <div id="slider2" className='row scroll overflow-x-scroll whitespace-nowrap scroll-smooth m-0'> {events.map((item, index) =>

                            <div className="card explorecard text-white text-end fw-bolder mx-2 bg-transparent border-0" key={index} style={{ width: "300px" }} >
                                <img src={item?.image_url} className="card-img" alt="..." style={{ width: "300px" }} />
                                <div className="card-img-overlay d-flex align-items-end justify-content-end">
                                    <button onClick={() => actions.editDesires(item)} className="favsicon bg-transparent border-0 d-flex justify-content-start rounded-circle border border-dark">♡</button>
                                    <a className='locationname' href={item.event_site_url}><h2 className='locationname'>{item?.name} </h2></a>
                                </div>
                            </div>)}
                        </div>
                        <div className="rightarrow rounded-circle justify-content-end"><BsFillArrowRightCircleFill onClick={slideRightTwo} /></div>
                    </div>
                </div>

                <div className='mb-3'>
                    <h1 className="categories">Something Sweet</h1>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="leftarrow rounded-circle justify-content-start"><BsFillArrowLeftCircleFill onClick={slideLeftThree} /></div>
                        <div id="slider3" className='row scroll overflow-x-scroll whitespace-nowrap scroll-smooth m-0'>{desserts.map((item, index) =>

                            <div className="card explorecard text-white text-end fw-bolder mx-2 bg-transparent border-0" key={index} style={{ width: "300px" }} >
                                <img src={item?.image_url} className="card-img" alt="..." style={{ width: "300px" }} />
                                <div className="card-img-overlay d-flex align-items-end justify-content-end">
                                    <button onClick={() => actions.editDesires(item)} className="favsicon bg-transparent border-0 d-flex justify-content-start rounded-circle border border-dark">♡</button>
                                    <a className='locationname' href={item.url}><h2 className='locationname'>{item?.name} </h2></a>
                                </div>
                            </div>)}
                        </div>
                        <div className="rightarrow rounded-circle justify-content-end"><BsFillArrowRightCircleFill onClick={slideRightThree} /></div>
                    </div>
                </div>
            </div>
        </>
    );
}