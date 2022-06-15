import React, { useState, useEffect } from 'react';
import { getApiRestaurants, getApiDesserts, getApiEvents } from '../component/apiExplore';

export const ExploreTest = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [events, setEvents] = useState([]);
    const [desserts, setDesserts] = useState([]);

    useEffect(() => {
        const fn = async () => {
          const apiRest = await getApiRestaurants();
         return setRestaurants(apiRest) ; 
        };
        fn();
      }, []);
      useEffect(() => {
        const fn = async () => {
          const apiParty = await getApiEvents();
         return setEvents(apiParty) ; 
        };
        fn();
      }, []);
      useEffect(() => {
        const fn = async () => {
          const apiDess = await getApiDesserts();
         return setDesserts(apiDess) ; 
        };
        fn();
      }, []);


    return (
        <>
            <div>
<h1>Restaurants</h1>
<div className='row'>{restaurants.map((item, index)=>

<div key={index} style={{width:"100px"}} > <img src={item?.image_url} style={{width:"100px"}}/><p>{item?.name} </p> </div> )}</div>

<h1>Events</h1>
<div className='row'> {events.map((item, index)=>

<div key={index} style={{width:"100px"}} > <img src={item?.image_url} style={{width:"100px"}}/><p>{item?.name} </p> </div> )} </div>

<h1>Desserts</h1>
<div className='row'>{desserts.map((item, index)=>

<div key={index} style={{width:"100px"}} > <img src={item?.image_url} style={{width:"100px"}}/><p>{item?.name} </p> </div> )} </div>
                
            </div>
        </>
    );
};
