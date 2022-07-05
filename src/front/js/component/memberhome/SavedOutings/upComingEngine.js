import React, { useContext, useState, useEffect } from "react";
import { DataBaseChange } from "../../../layout";
import RecipeReviewCard from "../../recipecard";
import { getUpcomingList } from "../Engine Room/upComingApi";
import { getUpComing, getUpComingEvent } from "./upComingApi";

export const UpComingEngine = () => {
  const [list, setList] = useState([]);
  const {dataUpdate, setDataUpdate} =useContext(DataBaseChange)
  // const [dinner, setDinner] =useState([]);
  // const [dessert, setDessert] = useState([]);

  useEffect(() => {
    const fn = async () => {
      const apiList = await getUpcomingList();


      return setList(apiList);
    };
    fn();
  }, [dataUpdate]);

  // const collect = (din,des) => {
  //   const fn = async () => {
  //     const fullDin = await getUpComing(din);
  //     const fullDes = await getUpComing(des);


  //     return setDinner(fullDin), setDessert(fullDes);
  //   };
  //   fn();

    
  // };

  return (
    <>
      <div style={{ display: "inline-block", marginLeft: "30px" }}>
        <p style={{ fontSize: "33px", fontWeight: "bold", color: "white" }}>
          
        </p>
       
        <div style={{display:"flex"}}>{list.map((x,i)=>  <div style={{marginLeft:"40px"}} key={i}> <h2 style={{color:"white",marginLeft:"35px"}}>Saved Outing #{i+1}</h2>
        <RecipeReviewCard name={x?.dinner} image={x?.dinImg} description="" location={x?.dinLoc} />
        <RecipeReviewCard name={x?.dateName} image={x?.dateImg} description={x?.dateDes} location="" />
        <RecipeReviewCard name={x?.dessert} image={x?.desImg} description="" location={x?.desLoc}  />


        
        
        </div>)}</div>
      </div>
    </>
  );
};
