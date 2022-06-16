import React, { useContext, useState, useEffect } from "react";
import { getEngineDate33128, getEngineDate33130, getEngineDate33139, getEngineDess33128, getEngineDess33130, getEngineDess33139, getEngineDinner33128, getEngineDinner33130, getEngineDinner33139 } from "./apiEngine";
import { GlobalZipCode } from "../../../layout";





export const HeartBeat = () => {
    const {zipCode, setZipCode}= useContext(GlobalZipCode);
    
    const [dinner, setDinner] =useState([]);
    const [date, setDate] =useState([]);
    const [dessert, setDessert] =useState([]);


    useEffect(() => {
        const fn = async () => {
          const din33130 = await getEngineDinner33130();
          const din33128 = await getEngineDinner33128();
          const din33139 = await getEngineDinner33139();
         return setDinner(din33130) ; 
        };
        fn();
      }, []);
      useEffect(() => {
        const fn = async () => {
          const date33130 = await getEngineDate33130();
          const date33128 = await getEngineDate33128();
          const date33139 = await getEngineDate33139();
         return setDate(date33130) ; 
        };
        fn();
      }, []);
      useEffect(() => {
        const fn = async () => {
          const dess33130 = await getEngineDess33130();
          const dess33128 = await getEngineDess33128();
          const dess33139 = await getEngineDess33139();
         return setDessert(dess33130) ; 
        };
        fn();
      }, []);
   
   
   
    return (
        <>
            <div>
                {dinner[1]?.name}
            </div>
        </>
    );
};