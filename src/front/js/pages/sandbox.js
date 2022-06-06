import React, {useEffect, useState} from 'react'
import { getYelpp, getKarin, getErin } from '../component/api'


export const Sandbox = () => {
  
  const [yelpp, setYelpp] = useState([]);
  const [karino, setKarino] = useState([]);
  const [erin, setErin] = useState([]);

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
    <nav className="navbar" style={{"background-color": "#58ccdb"}}>
    <div className="container-fluid">
    <a className="navbar-brand">Dinner Date Dessert</a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
  
</nav>
    

   
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
    <img style={{"width": "100%"}}src={karino?.photos?.[2]} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text"><b>Date: {karino?.name} </b> <br/>
    <b>Type: </b>{karino?.categories?.[1]?.title} <b> Rating </b>{karino.rating}
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
