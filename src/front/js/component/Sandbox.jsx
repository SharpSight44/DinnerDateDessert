import React, {useEffect, useState} from 'react'
import { getDinner, getFridate, getDessert } from './api'

const Sandbox = () => {
  const [dinner, setDinner] = useState([]);
  const [fridate, setFridate] = useState([]);
  const [dessert, setDessert] = useState([]);

  useEffect(() => {
    const fn = async () => {
      const apiDinner = await getDinner();
     return setDinner(apiDinner); 
    };
    fn();
  }, []);

  useEffect(() => {
    const fn = async () => {
      const apiFridate = await getFridate();
     return setFridate(apiFridate); 
    };
    fn();
  }, []);
  

  useEffect(() => {
      const fn = async () => {
        const apiDessert = await getDessert();
       return setDessert(apiDessert); 
      };
      fn();
    }, []);

  return (
    <>
    
    <div className="row">{dinner.map((x,i) => <div key={i} className="col"><div className="card my-3" style={{width: "18rem"}}>
  <img src={x.image1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>{x.title} </b></h5>
    <p className="card-text">{x.location}</p>
  </div>
</div></div> )}</div>

<div className="row">{fridate.map((x,i) => <div key={i} className="col"><div className="card my-3" style={{width: "18rem"}}>
  <img src={x.image1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>{x.title} </b></h5>
    <p className="card-text">{x.location}</p>
  </div>
</div></div> )}</div>

<div className="row">{dessert.map((x,i) => <div key={i} className="col"><div className="card my-3" style={{width: "18rem"}}>
  <img src={x.image1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>{x.title} </b></h5>
    <p className="card-text">{x.location}</p>
  </div>
</div></div> )}</div>
    </>)
}

export default Sandbox