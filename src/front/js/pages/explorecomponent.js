import React, { useState, useEffect } from 'react';
import "../../styles/explore.css";
import { getApiRestaurants, getApiDesserts, getApiEvents } from '../component/apiExplore';


export const ExploreComponent = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [events, setEvents] = useState([]);
    const [desserts, setDesserts] = useState([]);
    console.log(events);
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

    return (
        <>

            <div className='container'>
                <h1 className="titles">A Bite to Eat</h1>
                <div className='row scroll'>{restaurants.map((item, index) =>

                    <div className="card text-white text-end fw-bolder" key={index} style={{ width: "300px" }} >
                        <a className="innertitle" href={item.url}>
                            <img src={item?.image_url} className="card-img" alt="..." style={{ width: "300px" }} />
                            <div className="card-img-overlay d-flex align-items-end justify-content-end">
                                <h2>{item?.name} </h2>
                            </div>
                        </a>
                    </div>
                )}
                </div>

                <h1 className="titles">A Date</h1>
                <div className='row scroll'> {events.map((item, index) =>

                    <div className="card text-white text-end fw-bolder" key={index} style={{ width: "300px" }} >
                        <a className="innertitle" href={item.url}>
                            <img src={item?.image_url} className="card-img" alt="..." style={{ width: "300px" }} />
                            <div className="card-img-overlay d-flex align-items-end justify-content-end">
                                <h2 className="innertitle">{item?.name} </h2>
                            </div>
                        </a>
                    </div>)}
                </div>

                <h1 className="titles">Something Sweet</h1>
                <div className='row scroll'>{desserts.map((item, index) =>

                    <div className="card text-white text-end fw-bolder" key={index} style={{ width: "300px" }} >
                        <a className="innertitle" href={item.url}>
                            <img src={item?.image_url} className="card-img" alt="..." style={{ width: "300px" }} />
                            <div className="card-img-overlay d-flex align-items-end justify-content-end">
                                <h2 className="innertitle">{item?.name} </h2>
                            </div>
                        </a>
                    </div>)}
                </div>

            </div>
        </>
    );
}