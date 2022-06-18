import React, { useContext, useState, useEffect } from "react";
import { getEngineDate, getEngineDessert, getEngineDinner } from "./apiEngine";
import { GlobalZipCode } from "../../../layout";






export const HeartBeat = () => {
    const {zipCode, setZipCode}= useContext(GlobalZipCode);
    
    const [dinner, setDinner] =useState([]);
    const [date, setDate] =useState([]);
    const [dessert, setDessert] =useState([]);
  const [inX, setInX] = useState(0);
  const [inY, setInY] = useState(1);
  const [inZ, setInZ] = useState(2);




  useEffect(() => {
    if(inX > 18)
     
    return setInX(0), setInY(1), setInZ(2);
    
  }, [inX]);

    useEffect(() => {
        const fn = async () => {
          const dinnerZip = await getEngineDinner(zipCode);
          const dateZip = await getEngineDate(zipCode);
          const dessertZip = await getEngineDessert(zipCode);
         
         return setDinner(dinnerZip),setDate(dateZip), setDessert(dessertZip); 
        };
        fn();
      }, [zipCode]);
      

      const getMore = ()=>{

        const newX = inX + 3;
        const newY = inY + 3;
        const newZ = inZ + 3;

        return setInX(newX), setInY(newY), setInZ(newZ);

      };
   
      const selectedDinner = (selectedId) =>{

        return localStorage.setItem("dinner",JSON.stringify(selectedId))

      };

      const selectedDate = (selectedId) =>{

        return localStorage.setItem("date",JSON.stringify(selectedId))

      };
      const selectedDessert = (selectedId) =>{

        return localStorage.setItem("dessert",JSON.stringify(selectedId))

      };
   
   
    return (
        <>
        
        <div style={{display:"flex"}}>
            <div style={{width:"110px",display:"inline-block", margin:"10px"}}>
              <img style={{width:"100%"}} src={dinner[inX]?.image_url} />
              <button onClick={()=> selectedDinner(dinner[inX]?.id)}>Save/select</button>
                <b style={{color:"white", fontSize:"20px", margin:"10px"}}>{dinner[inX]?.name}</b>
            </div>
            <div style={{width:"110px",display:"inline-block",margin:"10px"}}>
              <img style={{width:"100%"}}  src={dinner[inY]?.image_url} />
              <button onClick={()=> selectedDinner(dinner[inY]?.id)}>Save/select</button>
                <b style={{color:"white", fontSize:"20px"}}>{dinner[inY]?.name}</b>
            </div>
            <div style={{width:"110px",display:"inline-block",margin:"10px"}}>
              <img style={{width:"100%"}}  src={dinner[inZ]?.image_url} />
              <button onClick={()=> selectedDinner(dinner[inZ]?.id)}>Save/select</button>
                <b style={{color:"white", fontSize:"20px"}}>{dinner[inZ]?.name}</b>
            </div>
             </div>

             <div style={{display:"flex"}}>
            <div style={{width:"110px",display:"inline-block", margin:"10px"}}>
              <img style={{width:"100%"}}  src={date[inX]?.image_url} />
              <button onClick={()=> selectedDate(date[inX]?.id)}>Save/select</button>
                <b style={{color:"white", fontSize:"16px", margin:"10px"}}>{date[inX]?.name}</b>
            </div>
            <div style={{width:"110px",display:"inline-block",margin:"10px"}}>
              <img style={{width:"100%"}}  src={date[inY]?.image_url} />
              <button onClick={()=> selectedDate(date[inY]?.id)}>Save/select</button>
                <b style={{color:"white", fontSize:"16px"}}>{date[inY]?.name}</b>
            </div>
            <div style={{width:"110px",display:"inline-block",margin:"10px"}}>
              <img style={{width:"100%"}}  src={date[inZ]?.image_url} />
              <button onClick={()=> selectedDate(date[inZ]?.id)}>Save/select</button>
                <b style={{color:"white", fontSize:"16px"}}>{date[inZ]?.name}</b>
            </div>
            
             </div>

             <div style={{display:"flex"}}>
            <div style={{width:"110px",display:"inline-block", margin:"10px"}}>
              <img style={{width:"100%"}}  src={dessert[inX]?.image_url} />
              <button onClick={()=> selectedDessert(dessert[inX]?.id)}>Save/select</button>
                <b style={{color:"white", fontSize:"20px", margin:"10px"}}>{dessert[inX]?.name}</b>
            </div>
            <div style={{width:"110px",display:"inline-block",margin:"10px"}}>
              <img style={{width:"100%"}}  src={dessert[inY]?.image_url} />
              <button onClick={()=> selectedDessert(dessert[inY]?.id)}>Save/select</button>
                <b style={{color:"white", fontSize:"20px"}}>{dessert[inY]?.name}</b>
            </div>
            <div style={{width:"110px",display:"inline-block",margin:"10px"}}>
              <img style={{width:"100%"}}  src={dessert[inZ]?.image_url} />
              <button onClick={()=> selectedDessert(dessert[inZ]?.id)}>Save/select</button>
                <b style={{color:"white", fontSize:"20px"}}>{dessert[inZ]?.name}</b>
            </div>
             </div>
             <div style={{marginLeft:"39%",marginTop:"3%"}}><button onClick={()=>getMore()}>Get More!</button></div>
       
        </>
    );
};