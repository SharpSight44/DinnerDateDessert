import React, { useContext, useState, useEffect } from "react";
import { getEngineDate, getEngineDess33128, getEngineDess33130, getEngineDess33139, getEngineDessert, getEngineDinner } from "./apiEngine";
import { GlobalZipCode } from "../../../layout";
import { DinnerDining } from "@mui/icons-material";





export const HeartBeat = () => {
    const {zipCode, setZipCode}= useContext(GlobalZipCode);
    
    const [dinner, setDinner] =useState([]);
    const [date, setDate] =useState([]);
    const [dessert, setDessert] =useState([]);


    useEffect(() => {
        const fn = async () => {
          const dinnerZip = await getEngineDinner(zipCode);
         
         return setDinner(dinnerZip) ; 
        };
        fn();
      }, [zipCode]);
      useEffect(() => {
        const fn = async () => {
          const dateZip = await getEngineDate(zipCode);
        
         return setDate(dateZip) ; 
        };
        fn();
      }, [zipCode]);
      useEffect(() => {
        const fn = async () => {
          const dessertZip = await getEngineDessert(zipCode);
        
         return setDessert(dessertZip) ; 
        };
        fn();
      }, [zipCode]);
   
   
   
    return (
        <>
        <div style={{display:"flex"}}>
            <div style={{width:"110px",display:"inline-block", margin:"10px"}}>
              <img src={dinner[0]?.image_url} />
                <b style={{color:"white", fontSize:"20px", margin:"10px"}}>{dinner[0]?.name}</b>
            </div>
            <div style={{width:"110px",display:"inline-block",margin:"10px"}}>
              <img src={dinner[1]?.image_url} />
                <b style={{color:"white", fontSize:"20px"}}>{dinner[1]?.name}</b>
            </div>
            <div style={{width:"110px",display:"inline-block",margin:"10px"}}>
              <img src={dinner[2]?.image_url} />
                <b style={{color:"white", fontSize:"20px"}}>{dinner[2]?.name}</b>
            </div>
             </div>

             <div style={{display:"flex"}}>
            <div style={{width:"110px",display:"inline-block", margin:"10px"}}>
              <img src={date[3]?.image_url} />
                <b style={{color:"white", fontSize:"16px", margin:"10px"}}>{date[3]?.name}</b>
            </div>
            <div style={{width:"110px",display:"inline-block",margin:"10px"}}>
              <img src={date[4]?.image_url} />
                <b style={{color:"white", fontSize:"16px"}}>{date[4]?.name}</b>
            </div>
            <div style={{width:"110px",display:"inline-block",margin:"10px"}}>
              <img src={date[8]?.image_url} />
                <b style={{color:"white", fontSize:"16px"}}>{date[8]?.name}</b>
            </div>
             </div>

             <div style={{display:"flex"}}>
            <div style={{width:"110px",display:"inline-block", margin:"10px"}}>
              <img src={dessert[0]?.image_url} />
                <b style={{color:"white", fontSize:"20px", margin:"10px"}}>{dessert[0]?.name}</b>
            </div>
            <div style={{width:"110px",display:"inline-block",margin:"10px"}}>
              <img src={dessert[1]?.image_url} />
                <b style={{color:"white", fontSize:"20px"}}>{dessert[1]?.name}</b>
            </div>
            <div style={{width:"110px",display:"inline-block",margin:"10px"}}>
              <img src={dessert[2]?.image_url} />
                <b style={{color:"white", fontSize:"20px"}}>{dessert[2]?.name}</b>
            </div>
             </div>
        </>
    );
};