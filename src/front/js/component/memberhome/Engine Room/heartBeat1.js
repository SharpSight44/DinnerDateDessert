import React, { useContext, useState, useEffect } from "react";
import { getEngineDate, getEngineDessert, getEngineDinner } from "./apiEngine";
import { GlobalZipCode } from "../../../layout";
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { soMa, upperHaight, missionDistrict, theMarina, financial,southBeach, wynwood,doral,brickell } from "./activitesData";
import { LensTwoTone } from "@mui/icons-material";
import {pink} from '@mui/material/colors';
import Button from '@mui/material/Button';
import "/src/front/styles/test.css";
import { typography } from '@mui/system';
import { fontSize } from "@mui/system";
import Typography from '@mui/material/Typography';







export const HeartBeat = () => {
    const {zipCode, setZipCode}= useContext(GlobalZipCode);
    
    const [dinner, setDinner] =useState([]);
    const [date, setDate] =useState([]);
    const [dessert, setDessert] =useState([]);
    const [mandate, setManDate] = useState([]);
  const [inX, setInX] = useState(0);
  const [inY, setInY] = useState(1);
  const [inZ, setInZ] = useState(2);


const getActs = (zip) =>{
 
  if(zip== 94107){
    return setManDate(soMa);
  } if (zip == 94110)
  { return setManDate(missionDistrict);

  } if(zip== 94133){
    return setManDate(theMarina);
  } if (zip == 94117)
  { return setManDate(upperHaight);

  }if(zip== 100004){
    return setManDate(financial);
  } if (zip == 94110)
  { return setManDate(missionDistrict);

  }if(zip== 33127){
    return setManDate(soMa);
  } if (zip == 33139)
  { return setManDate(missionDistrict);

  }if(zip== 33129){
    return setManDate(brickell);
  } if (zip == 33139)
  { return setManDate(southBeach);

  }if(zip== 33127){
    return setManDate(wynwood);
  } if (zip == 33166)
  { return setManDate(doral);

  }
  else {
    return setManDate(upperHaight);
  }

};
  useEffect(() => {
    if(inX > 18)
     
    return setInX(0), setInY(1), setInZ(2);
    
  }, [inX]);

    useEffect(() => {
        const fn = async () => {
          const dinnerZip = await getEngineDinner(zipCode);
          const dateZip = await getEngineDate(zipCode);
          const dessertZip = await getEngineDessert(zipCode);
         
         return setDinner(dinnerZip),setDate(dateZip), setDessert(dessertZip),getActs(zipCode); 
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
   const handleCheck = (event) =>{
    event.persist();

    console.log(event);
   };
   
    return (
        <>
        
        <div style={{display:"flex"}}>
            <div style={{width:"110px",display:"inline-block", margin:"10px"}}>
              <img style={{width:"100%"}} src={dinner[inX]?.image_url} />
              
              <FormControlLabel labelPlacement="start" style={{marginInlineEnd:"15px"}}
        label={<Typography  fontSize="14px" color="#cab105"> Dinner</Typography>}
        control={<Checkbox onChange={()=> selectedDinner(dinner[inX]?.id)} size="small" sx={{'& .MuiSvgIcon-root': { fontSize: 15 },
          color: "#cab105",
          '&.Mui-checked': {
            color: "#cab105",
          },
        }} />}
      />
                <b style={{color:"white", fontSize:"16px", margin:"10px"}}>{dinner[inX]?.name}</b>
            </div>
            <div style={{width:"110px",display:"inline-block",margin:"10px"}}>
              <img style={{width:"100%"}}  src={dinner[inY]?.image_url} />
            
              <FormControlLabel labelPlacement="start" style={{marginInlineEnd:"15px"}}
        label={<Typography  fontSize="14px" color="#cab105"> Dinner</Typography>}
        control={<Checkbox onChange={()=> selectedDinner(dinner[inY]?.id)} size="small" sx={{'& .MuiSvgIcon-root': { fontSize: 15 },
          color: "#cab105",
          '&.Mui-checked': {
            color: "#cab105",
          },
        }} />}
      />
                <b style={{color:"white", fontSize:"16px"}}>{dinner[inY]?.name}</b>
            </div>
            <div style={{width:"110px",display:"inline-block",margin:"10px"}}>
              <img style={{width:"100%"}}  src={dinner[inZ]?.image_url} />
             
              <FormControlLabel labelPlacement="start" style={{marginInlineEnd:"15px"}}
        label={<Typography  fontSize="14px" color="#cab105"> Dinner</Typography>}
        control={<Checkbox size="small" onChange={()=> selectedDinner(dinner[inZ]?.id)} sx={{'& .MuiSvgIcon-root': { fontSize: 15 },
          color: "#cab105",
          '&.Mui-checked': {
            color: "#cab105",
          },
        }} />}
      />
                <b style={{color:"white", fontSize:"16px"}}>{dinner[inZ]?.name}</b>
            </div>
             </div>

             <div style={{display:"flex"}}>
            <div style={{width:"110px",display:"inline-block", margin:"10px"}}>
              <img style={{width:"100%"}}  src={mandate[inX]?.image_url} />
             
              <FormControlLabel labelPlacement="start" style={{marginInlineEnd:"15px"}}
        label={<Typography  fontSize="13px" color="#2fcf18"> Activity</Typography>}
        control={<Checkbox onChange={()=> selectedDate(date[inX]?.id)} size="small" sx={{'& .MuiSvgIcon-root': { fontSize: 15 },
          color: "#2fcf18",
          '&.Mui-checked': {
            color: "#2fcf18",
          },
        }} />}
      />
                <b style={{color:"white", fontSize:"16px", margin:"10px"}}>{mandate[inX]?.name}</b>
            </div>
            <div style={{width:"110px",display:"inline-block",margin:"10px"}}>
              <img style={{width:"100%"}}  src={mandate[inY]?.image_url} />
              
              <FormControlLabel labelPlacement="start" style={{marginInlineEnd:"15px"}}
        label={<Typography  fontSize="13px" color="#2fcf18"> Activity</Typography>}
        control={<Checkbox onChange={()=> selectedDate(date[inY]?.id)} size="small" sx={{'& .MuiSvgIcon-root': { fontSize: 15 },
          color: "#2fcf18",
          '&.Mui-checked': {
            color: "#2fcf18",
          },
        }} />}
      />
                <b style={{color:"white", fontSize:"16px"}}>{mandate[inY]?.name}</b>
            </div>
            <div style={{width:"110px",display:"inline-block",margin:"10px"}}>
              <img style={{width:"100%"}}  src={mandate[inZ]?.image_url} />
              
              <FormControlLabel labelPlacement="start" style={{marginInlineEnd:"15px"}}
        label={<Typography  fontSize="13px" color="#2fcf18"> Activity</Typography>}
        control={<Checkbox onChange={()=> selectedDate(date[inZ]?.id)} size="small" sx={{'& .MuiSvgIcon-root': { fontSize: 15 },
          color: "#2fcf18",
          '&.Mui-checked': {
            color: "#2fcf18",
          },
        }} />}
      />
                <b style={{color:"white", fontSize:"16px"}}>{mandate[inZ]?.name}</b>
            </div>
            
             </div>

             <div style={{display:"flex"}}>
            <div style={{width:"110px",display:"inline-block", margin:"10px"}}>
              <img style={{width:"100%"}}  src={dessert[inX]?.image_url} />
              
              <FormControlLabel labelPlacement="start" style={{marginInlineEnd:"15px"}}
        label={<Typography  fontSize="12px" color="#ff2565">Dessert</Typography>}
        control={<Checkbox onChange={()=> selectedDessert(dessert[inX]?.id)} size="small" sx={{'& .MuiSvgIcon-root': { fontSize: 15 },
          color: "#ff2565",
          '&.Mui-checked': {
            color: "#ff2565",
          },
        }} />}
      />
                <b style={{color:"white", fontSize:"16px", margin:"10px"}}>{dessert[inX]?.name}</b>
            </div>
            <div style={{width:"110px",display:"inline-block",margin:"10px"}}>
              <img style={{width:"100%"}}  src={dessert[inY]?.image_url} />
              
             <FormControlLabel labelPlacement="start" style={{marginInlineEnd:"15px"}}
        label={<Typography  fontSize="12px" color="#ff2565">Dessert</Typography>}
        control={<Checkbox onChange={()=> selectedDessert(dessert[inY]?.id)} size="small" sx={{'& .MuiSvgIcon-root': { fontSize: 15 },
          color: "#ff2565",
          '&.Mui-checked': {
            color: "#ff2565",
          },
        }} />}
      />
                <b style={{color:"white", fontSize:"16px"}}>{dessert[inY]?.name}</b>
            </div>
            <div style={{width:"110px",display:"inline-block",margin:"10px"}}>
              <img style={{width:"100%"}}  src={dessert[inZ]?.image_url} />
             
              <FormControlLabel labelPlacement="start" style={{marginInlineEnd:"15px"}}
              label={<Typography  fontSize="12px" color="#ff2565">Dessert</Typography>}
        
        control={<Checkbox onChange={()=> selectedDessert(dessert[inZ]?.id)} size="small"  sx={{'& .MuiSvgIcon-root': { fontSize: 15 },
          color: "#ff2565",
          '&.Mui-checked': {
            color: "#ff2565",
          },
        }} />}
      />
                <b style={{color:"white", fontSize:"16px"}}>{dessert[inZ]?.name}</b>
               
            </div>
             </div>
             <div style={{marginLeft:"39%",marginTop:"3%"}}><button type="button" className="btn btn-primary btn-md" style={{background:"#e6e600", color:"#333300"}} onClick={()=>getMore()}   >More</button></div>
       
        </>
    );
};