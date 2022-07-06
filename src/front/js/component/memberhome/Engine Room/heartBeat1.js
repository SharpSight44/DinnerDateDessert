import React, { useContext, useState, useEffect } from "react";
import { getEngineDate, getEngineDessert, getEngineDinner } from "./apiEngine";
import { DataBaseChange, GlobalZipCode } from "../../../layout";
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { soMa, upperHaight, missionDistrict, theMarina, financial,southBeach, wynwood,doral,brickell, upperEastSide, soho, brooklyn } from "./activitesData";
import { LensTwoTone } from "@mui/icons-material";
import {pink} from '@mui/material/colors';
import Button from '@mui/material/Button';
import "/src/front/styles/test.css";
import { typography } from '@mui/system';
import { fontSize } from "@mui/system";
import Typography from '@mui/material/Typography';
import ActionAreaCard from "./muicard";
import ImgMediaCard from "./selectedCards";
import { UpComingEngine } from "../SavedOutings/upComingEngine";
import { getUpComing, getUpComingEvent } from "../SavedOutings/upComingApi";
import { postUpcoming } from "./upComingApi";









export const HeartBeat = () => {
  const {dataUpdate, setDataUpdate} = useContext(DataBaseChange);
    const {zipCode, setZipCode}= useContext(GlobalZipCode);
    const[sdin,setSdin] = useState([]);
    const[sdate,setSdate] = useState([]);
    const[sdes,setSdes] = useState([]);
    const [dinner, setDinner] =useState([]);
    const [date, setDate] =useState([]);
    const [dessert, setDessert] =useState([]);
    const [mandate, setManDate] = useState([]);
  const [inX, setInX] = useState(0);
  const [inY, setInY] = useState(1);
  const [inZ, setInZ] = useState(2);

  const saveStack = (dinner, dinImg, dinLoc, dessert,desImg, desLoc,dateName,dateImg,dateDes) =>{

    const setStack = {dinner:dinner, dinImg:dinImg, dinLoc:dinLoc, dessert:dessert,desImg:desImg,desLoc:desLoc,dateName:dateName,dateImg:dateImg,dateDes:dateDes};
    const render = dataUpdate + 1 ;



    return postUpcoming(setStack), setDataUpdate(render);


  };

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
  } if (zip == 10012)
  { return setManDate(soho);

  }if(zip== 10065){
    return setManDate(upperEastSide);
  } if (zip == 11205)
  { return setManDate(brooklyn);

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
        const fn = async () => {
          const apidinner = await getUpComing(selectedId);

        return setSdin(apidinner);
        };
        fn();

      };

      const selectedDate = (selectedId) =>{

        return setSdate(selectedId);
        


      };
      const selectedDessert = (selectedId) =>{
        const fn = async () => {
          const apidessert = await getUpComing(selectedId);

        return setSdes(apidessert);
        };
        fn();


      };

    


   const handleCheck = (event) =>{
    event.persist();

    console.log(event);
   };
   
    return (
        <>
        <div style={{display:"flex"}} className="allCardsContainer">
        <div style={{display:"inline-block"}} className="resultsCards">
        <div style={{display:"flex"}}>
            <div style={{width:"110px",display:"inline-block", margin:"10px"}}>
            <ActionAreaCard im={dinner[inX]?.image_url} title={dinner[inX]?.name} />
          
              
              <FormControlLabel labelPlacement="start" style={{marginInlineEnd:"15px"}}
        label={<Typography  fontSize="14px" color="#cab105"> Dinner</Typography>}
        control={<Checkbox onChange={()=> selectedDinner(dinner[inX]?.id)} size="small" sx={{'& .MuiSvgIcon-root': { fontSize: 15 },
          color: "#cab105",
          '&.Mui-checked': {
            color: "#cab105",
          },
        }} />}
      />
            </div>
            <div style={{width:"110px",display:"inline-block",margin:"10px"}}>
            <ActionAreaCard im={dinner[inY]?.image_url} title={dinner[inY]?.name} />
             
            
              <FormControlLabel labelPlacement="start" style={{marginInlineEnd:"15px"}}
        label={<Typography  fontSize="14px" color="#cab105"> Dinner</Typography>}
        control={<Checkbox onChange={()=> selectedDinner(dinner[inY]?.id)} size="small" sx={{'& .MuiSvgIcon-root': { fontSize: 15 },
          color: "#cab105",
          '&.Mui-checked': {
            color: "#cab105",
          },
        }} />}
      />
               
            </div>
            <div style={{width:"110px",display:"inline-block",margin:"10px"}}>
            <ActionAreaCard im={dinner[inZ]?.image_url} title={dinner[inZ]?.name} />
            
             
              <FormControlLabel labelPlacement="start" style={{marginInlineEnd:"15px"}}
        label={<Typography  fontSize="14px" color="#cab105"> Dinner</Typography>}
        control={<Checkbox size="small" onChange={()=> selectedDinner(dinner[inZ]?.id)} sx={{'& .MuiSvgIcon-root': { fontSize: 15 },
          color: "#cab105",
          '&.Mui-checked': {
            color: "#cab105",
          },
        }} />}
      />
            </div>
             </div>

             <div style={{display:"flex"}}>
            <div style={{width:"110px",display:"inline-block", margin:"10px"}}>
            <ActionAreaCard im={mandate[inX]?.image_url} title={mandate[inX]?.name} />
            
             
              <FormControlLabel labelPlacement="start" style={{marginInlineEnd:"15px"}}
        label={<Typography  fontSize="14px" color="#2fcf18"> Activity</Typography>}
        control={<Checkbox onChange={()=> selectedDate(mandate[inX])} size="small" sx={{'& .MuiSvgIcon-root': { fontSize: 15 },
          color: "#2fcf18",
          '&.Mui-checked': {
            color: "#2fcf18",
          },
        }} />}
      />
              
            </div>
            <div style={{width:"110px",display:"inline-block",margin:"10px"}}>
            <ActionAreaCard im={mandate[inY]?.image_url} title={mandate[inY]?.name} />
            
              
              <FormControlLabel labelPlacement="start" style={{marginInlineEnd:"15px"}}
        label={<Typography  fontSize="14px" color="#2fcf18"> Activity</Typography>}
        control={<Checkbox onChange={()=> selectedDate(mandate[inY])} size="small" sx={{'& .MuiSvgIcon-root': { fontSize: 15 },
          color: "#2fcf18",
          '&.Mui-checked': {
            color: "#2fcf18",
          },
        }} />}
      />
            
            </div>
            <div style={{width:"110px",display:"inline-block",margin:"10px"}}>
            <ActionAreaCard im={mandate[inZ]?.image_url} title={mandate[inZ]?.name} />
              
              
              <FormControlLabel labelPlacement="start" style={{marginInlineEnd:"15px"}}
        label={<Typography  fontSize="14px" color="#2fcf18"> Activity</Typography>}
        control={<Checkbox onChange={()=> selectedDate(mandate[inZ])} size="small" sx={{'& .MuiSvgIcon-root': { fontSize: 15 },
          color: "#2fcf18",
          '&.Mui-checked': {
            color: "#2fcf18",
          },
        }} />}
      />
        
            </div>
            
             </div>

             <div style={{display:"flex"}}>
            <div style={{width:"110px",display:"inline-block", margin:"10px"}}>
            <ActionAreaCard im={dessert[inX]?.image_url} title={dessert[inX]?.name} />
          
              
              <FormControlLabel labelPlacement="start" style={{marginInlineEnd:"15px"}}
        label={<Typography  fontSize="14px" color="#ff2565">Dessert</Typography>}
        control={<Checkbox onChange={()=> selectedDessert(dessert[inX]?.id)} size="small" sx={{'& .MuiSvgIcon-root': { fontSize: 15 },
          color: "#ff2565",
          '&.Mui-checked': {
            color: "#ff2565",
          },
        }} />}
      />
            </div>
            <div style={{width:"110px",display:"inline-block",margin:"10px"}}>
            <ActionAreaCard im={dessert[inY]?.image_url} title={dessert[inY]?.name} />
             
              
             <FormControlLabel labelPlacement="start" style={{marginInlineEnd:"15px"}}
        label={<Typography  fontSize="14px" color="#ff2565">Dessert</Typography>}
        control={<Checkbox onChange={()=> selectedDessert(dessert[inY]?.id)} size="small" sx={{'& .MuiSvgIcon-root': { fontSize: 15 },
          color: "#ff2565",
          '&.Mui-checked': {
            color: "#ff2565",
          },
        }} />}
      />
            
            </div>
            <div style={{width:"110px",display:"inline-block",margin:"10px"}}>
            <ActionAreaCard im={dessert[inZ]?.image_url} title={dessert[inZ]?.name} />
            
             
              <FormControlLabel labelPlacement="start" style={{marginInlineEnd:"15px"}}
              label={<Typography  fontSize="14px" color="#ff2565">Dessert</Typography>}
        
        control={<Checkbox onChange={()=> selectedDessert(dessert[inZ]?.id)} size="small"  sx={{'& .MuiSvgIcon-root': { fontSize: 15 },
          color: "#ff2565",
          '&.Mui-checked': {
            color: "#ff2565",
          },
        }} />}
      />
            
               
            </div>
             </div>
             <div style={{marginLeft:"39%",marginTop:"3%"}}><button type="button" className="btn btn-primary btn-md" style={{background:"#e6e600", color:"#333300"}} onClick={()=>getMore()}   >More</button></div>

             </div>
             <div style={{width:"500px", marginLeft:"70px"}}>
              <div >
               { sdin == false? "":(<ImgMediaCard im={sdin?.image_url} title="Selected Dinner" des={sdin?.name} />) }
              </div>
              <div style={{marginTop:"10px"}}>
                { sdate ==false ? "":(<ImgMediaCard im={sdate?.image_url} title="Selected Activity" des={sdate?.name} />)}
              </div>
              <div style={{marginTop:"10px"}}>
               { sdes == false? "":(<ImgMediaCard im={sdes?.image_url} title="Selected dessert" des={sdes?.name} />)}
              </div>
              { sdin == false? "":(<button className="btn  btn-sm" style={{marginLeft:"15%",background:"#44a11d"}} onClick={()=> saveStack(sdin?.name,sdin?.image_url,sdin?.location?.display_address,sdes?.name,sdes?.image_url,sdes?.location?.display_address,sdate?.name,sdate?.image_url,sdate?.description)}>Save Stack</button>)}
              </div>
             </div>
           
       
        </>
    );
};