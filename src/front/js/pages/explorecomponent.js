import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/explore.css";
import { getApiRestaurants, getApiDesserts, postDinner, postDate, postDessert } from '../component/apiExplore';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsFillHeartFill } from "react-icons/bs";
import { BiHeartCircle } from "react-icons/bi";
import { RiHeartsLine } from "react-icons/ri";
import { DataBaseChange, GlobalZipCode } from '../layout';
import { soMa, upperHaight, missionDistrict, theMarina, financial,southBeach, wynwood,doral,brickell, upperEastSide, soho, brooklyn } from '../component/memberhome/Engine Room/activitesData';


export const ExploreComponent = () => {
    const { store, actions } = useContext(Context);
    const [restaurants, setRestaurants] = useState([]);
    const [events, setEvents] = useState([]);
    const [desserts, setDesserts] = useState([]);
    const {zipCode, setZipCode}= useContext(GlobalZipCode);
    const {dataUpdate, setDataUpdate} = useContext(DataBaseChange);
    console.log(store.desires);
    // console.log(events);
    // console.log(restaurants);



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
            const apiRest = await getApiRestaurants(zipCode);
            return setRestaurants(apiRest);
        };
        fn();
    }, [zipCode]);
    useEffect(() => {
        const fn = async () => {
            const apiSweets = await getApiDesserts(zipCode);
            return setDesserts(apiSweets);
        };
        fn();
    }, [zipCode]);
  
    useEffect(()=>{

        if(zipCode== 94107){
            return setEvents(soMa);
          } if (zipCode == 94110)
          { return setEvents(missionDistrict);
        
          } if(zipCode== 94133){
            return setEvents(theMarina);
          } if (zipCode == 94117)
          { return setEvents(upperHaight);
        
          }if(zipCode== 100004){
            return setEvents(financial);
          } if (zipCode == 10012)
          { return setEvents(soho);
        
          }if(zipCode== 10065){
            return setEvents(upperEastSide);
          } if (zipCode == 11205)
          { return setEvents(brooklyn);
        
          }if(zipCode== 33129){
            return setEvents(brickell);
          } if (zipCode == 33139)
          { return setEvents(southBeach);
        
          }if(zipCode== 33127){
            return setEvents(wynwood);
          } if (zipCode == 33166)
          { return setEvents(doral);
        
          }
          else {
            return setEvents(upperHaight);
          }


    }, [zipCode]

    ); 

    const saveDinner = (item)=>{


        const itemData = {dinner:item?.name, dinImg:item?.image_url, dinLoc:item?.location?.display_address, dinRating:item?.rating};
        const render = dataUpdate + 1 ;

        return postDinner(itemData), setDataUpdate(render);

    };
    const saveDate = (item)=>{


        const itemData = {dinner:item?.name, dinImg:item?.image_url, dinLoc:item?.location?.display_address, dinRating:item?.rating};
        const render = dataUpdate + 1 ;

        return postDate(itemData), setDataUpdate(render);

    };
    const saveDessert = (item)=>{


        const itemData = {dessert:item?.name, desImg:item?.image_url, desLoc:item?.location?.display_address, desRating:item?.rating};
        const render = dataUpdate + 1 ;

        return postDessert(itemData), setDataUpdate(render);

    };



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
                                    <button onClick={() => saveDinner(item) } className="favsicon bg-transparent border-0 d-flex justify-content-start rounded-circle border border-dark">♡</button>
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
                                    <button onClick={() => saveDate(item)} className="favsicon bg-transparent border-0 d-flex justify-content-start rounded-circle border border-dark">♡</button>
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
                                    <button onClick={() => saveDessert(item)} className="favsicon bg-transparent border-0 d-flex justify-content-start rounded-circle border border-dark">♡</button>
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