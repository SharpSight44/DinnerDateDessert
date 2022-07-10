import React, { useContext, useState, useEffect } from "react";
import { DataBaseChange, TokenIssued } from "../../../layout";
import RecipeReviewCard from "../../recipecard";
import { getUpcomingList, postMemories, removeStack } from "../Engine Room/upComingApi";
import { getUpComing, getUpComingEvent } from "./upComingApi";

export const UpComingEngine = () => {
  const [list, setList] = useState([]);
  const {dataUpdate, setDataUpdate} =useContext(DataBaseChange);
  const {token, setToken} = useContext(TokenIssued);
  // const [dinner, setDinner] =useState([]);
  // const [dessert, setDessert] = useState([]);
  useEffect(() => {
    const fn = async () => {
      const apiList = await getUpcomingList(token);


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
const submitMemories =(dinner, dinImg, dinLoc, dessert,desImg, desLoc,dateName,dateImg,dateDes,id) => {
  const setStack = {dinner:dinner, dinImg:dinImg, dinLoc:dinLoc, dessert:dessert,desImg:desImg,desLoc:desLoc,dateName:dateName,dateImg:dateImg,dateDes:dateDes};
  const render = dataUpdate + 1 ;
  setTimeout(()=> removeStack(id,token), 3000)
  
  return postMemories(setStack,token), setDataUpdate(render) ;
};
  return (
    <>
      <div style={{ display: "inline-block", marginLeft: "30px" }}>
        <p style={{ fontSize: "33px", fontWeight: "bold", color: "white" }}>
          
        </p>
       
        <div >{list.map((x,i)=>  <div style={{marginLeft:"40px", marginBottom:"24px"}} key={x?.id}> <h2 style={{color:"white",marginLeft:"35px"}}>Saved Outing #{i+1}</h2>
        
        <div style={{display:"flex"}}><RecipeReviewCard  name={x?.dinner} image={x?.dinImg} d="Dinner" description="" location={x?.dinLoc} />
        <RecipeReviewCard  name={x?.dateName} image={x?.dateImg} description={x?.dateDes} d="Activity" location="" />
        <RecipeReviewCard  name={x?.dessert} image={x?.desImg} description="" d="Dessert" location={x?.desLoc}  /> <button onClick={()=> submitMemories(x?.dinner, x?.dinImg, x?.dinLoc, x?.dessert,x?.desImg, x?.desLoc,x?.dateName,x?.dateImg, x?.dateDes, x?.id)} className="btn  btn-sm"> Completed Outing</button></div>


        
        
        </div>)}</div>
      </div>
    </>
  );
};
