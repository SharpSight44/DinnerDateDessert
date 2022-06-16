import React, {useEffect, useState} from 'react'
import { getYelpp, getKarin, getErin, getEvent1 } from '../component/api'


export const Sandbox = () => {
  
  const [yelpp, setYelpp] = useState([]);
  const [karino, setKarino] = useState([]);
  const [erin, setErin] = useState([]);
  const [event11, setEvent11] = useState([]);
  

  useEffect(() => {
    const fn = async () => {
      const apiEvent1 = await getEvent1();
     return setEvent11(apiEvent1) ; 
    };
    fn();
  }, []);
  useEffect(() => {
    const fn = async () => {
      const apiYelpp = await getYelpp();
     return setYelpp(apiYelpp) ; 
    };
    fn();
  }, []);
  useEffect(() => {
    const fn = async () => {
      const apiYelp = await getKarin();
     return setKarino(apiYelp) ; 
    };
    fn();
  }, []);

  useEffect(() => {
    const fn = async () => {
      const apiY = await getErin();
     return setErin(apiY) ; 
    };
    fn();
  }, []);

  return (
    <>
    

   
    <div></div>


    <div className="row" style={{fontSize: "small"}}>
      <div className="col-1" style={{ marginLeft:"2.5rem"}}><div className="card m-1" style={{width: "12rem", marginLeft:"8rem"}}>
    <img style={{"width": "100%"}}src={yelpp.image_url} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text"><b>Dinner: {yelpp?.name} </b> <br/>
    <b>Type: </b>{yelpp?.categories?.[1]?.alias} <br/> <b> Rating </b>{yelpp.rating}
</p>
  </div>
</div></div>
<div className="col-1" style={{ marginLeft:"2.5rem"}}><div className="card m-1" style={{width: "12rem", marginLeft:"8rem"}}>
    <img style={{"width": "100%"}}src={event11?.photos?.[2]} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text"><b>Date: {event11?.name} </b> <br/>
    <b>Type: </b>{event11?.categories?.[1]?.title} <b> Rating </b>{event11.rating}
</p>
  </div>
</div></div>
<div className="col-2" style={{ marginLeft:"2.5rem"}}><div className="card m-1" style={{width: "12rem"}}>
    <div className='flex'><img style={{"width": "50%"}}src={erin.image_url} className="card-img-top" alt="..."/><img style={{"width": "50%"}}src={erin?.photos?.[2]} className="card-img-top" alt="..."/></div>
  <div className="card-body">
    <p className="card-text"><b>Dessert: {erin?.name} </b> <br/>
    <b>Type: </b>{erin?.categories?.[0]?.title} <b> Rating </b>{erin.rating}
</p>
  </div>
</div></div> </div>
<div className="row" style={{fontSize: "small"}}>
      <div className="col-1" style={{ marginLeft:"2.5rem"}}><div className="card m-1" style={{width: "12rem", marginLeft:"8rem"}}>
    <img style={{"width": "100%"}}src={yelpp.image_url} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text"><b>Dinner: {yelpp?.name} </b> <br/>
    <b>Type: </b>{yelpp?.categories?.[1]?.alias} <br/> <b> Rating </b>{yelpp.rating}
</p>
  </div>
</div></div>
<div className="col-1" style={{ marginLeft:"2.5rem"}}><div className="card m-1" style={{width: "12rem", marginLeft:"8rem"}}>
    <img style={{"width": "100%"}}src={karino?.photos?.[2]} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text"><b>Date: {karino?.name} </b> <br/>
    <b>Type: </b>{karino?.categories?.[1]?.title} <b> Rating </b>{yelpp.rating}
</p>
  </div>
</div></div>
<div className="col-2" style={{ marginLeft:"2.5rem"}}><div className="card m-1" style={{width: "12rem"}}>
<div className='flex'><img style={{"width": "50%"}}src={erin.image_url} className="card-img-top" alt="..."/><img style={{"width": "50%"}}src={erin?.photos?.[2]} className="card-img-top" alt="..."/></div>
  <div className="card-body">
    <p className="card-text"><b>Dessert: {erin?.name} </b> <br/>
    <b>Type: </b>{erin?.categories?.[0]?.title} <b> Rating </b>{erin.rating}
</p>
  </div>
</div></div> </div>

<div className="row" style={{fontSize: "small"}}>
      <div className="col-1" style={{ marginLeft:"2.5rem"}}><div className="card m-1" style={{width: "12rem", marginLeft:"8rem"}}>
    <img style={{"width": "100%"}}src={yelpp.image_url} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text"><b>Dinner: {yelpp?.name} </b> <br/>
    <b>Type: </b>{yelpp?.categories?.[1]?.alias}<br/> <b> Rating </b>{yelpp.rating}
</p>
  </div>
</div></div>
<div className="col-1" style={{ marginLeft:"2.5rem"}}><div className="card m-1" style={{width: "12rem", marginLeft:"8rem"}}>
    <img style={{"width": "100%"}}src={karino?.photos?.[2]} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text"><b>Date: {karino?.name} </b> <br/>
    <b>Type: </b>{karino?.categories?.[1]?.title} <b> Rating </b>{yelpp.rating}
</p>
  </div>
</div></div>
<div className="col-2" style={{ marginLeft:"2.5rem"}}><div className="card m-1" style={{width: "12rem"}}>
<div className='flex'><img style={{"width": "50%"}}src={erin.image_url} className="card-img-top" alt="..."/><img style={{"width": "50%"}}src={erin?.photos?.[2]} className="card-img-top" alt="..."/></div>
  <div className="card-body">
    <p className="card-text"><b>Dessert: {erin?.name} </b> <br/>
    <b>Type: </b>{erin?.categories?.[0]?.title} <b> Rating </b>{erin.rating}
</p>
  </div>
</div></div> </div>

    </>)
}
