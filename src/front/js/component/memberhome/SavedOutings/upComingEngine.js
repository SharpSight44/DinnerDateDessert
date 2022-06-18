import React, { useContext, useState, useEffect } from "react";
import RecipeReviewCard from "../../recipecard";
import { getUpComing, getUpComingEvent } from "./upComingApi";








export const UpComingEngine = () => {
    const [dinner, setDinner] =useState([]);
    const [date, setDate] =useState([]);
    const [dessert, setDessert] =useState([]);
    

    

 const sDinner = JSON.parse(localStorage.getItem("dinner"));
 const sDate = JSON.parse(localStorage.getItem("date"));
 const sDessert = JSON.parse(localStorage.getItem("dessert"));
    
    useEffect(() => {
        const fn = async () => {
          const apidinner = await getUpComing(sDinner);
          const apievent = await getUpComingEvent(sDate);
          const apidessert = await getUpComing(sDessert);
        
         
         return setDinner(apidinner), setDate(apievent), setDessert(apidessert);
        };
        fn();
      }, [sDinner,sDate, sDessert]);







    return (
<>

    <div style={{ display: "inline-block", marginLeft: "30px" }}>
    <p style={{fontSize:"33px", fontWeight:"bold", color:"white"}}>Dinner</p>
        <RecipeReviewCard name={dinner?.name} image={dinner?.image_url} description={dinner?.rating} location={dinner?.location?.display_address}/>

      </div>
      <div style={{ display: "inline-block", marginLeft: "30px" }}>
      <p style={{fontSize:"33px", fontWeight:"bold", color:"white"}}>Date</p>
       <RecipeReviewCard name={date?.name} image={date?.image_url} description={date?.description} location={date?.location?.display_address}/>

      </div>
      <div style={{ display: "inline-block", marginLeft: "30px" }}>
      <p style={{fontSize:"33px", fontWeight:"bold", color:"white"}}>Dessert</p>
       <RecipeReviewCard name={dessert?.name} image={dessert?.image_url} description={dessert?.rating} location={dessert?.location?.display_address}/>

      </div>

</>



    );
};