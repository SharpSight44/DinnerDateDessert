import React, { useContext, useState, useEffect } from "react";
import Switch from '@mui/material/Switch';
import { MemberNavbar } from "../../memberNavbar";
import RingLoader from "react-spinners/RingLoader";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import bree from '/src/front/img/sel2.png';
import { GlobalZipCode, TokenIssued } from "../../../layout";
import { HeartBeat } from "./heartBeat1";
import { getUpComing, getUpComingEvent } from "../SavedOutings/upComingApi";
import soho from '/src/front/img/GreenwichVillagenyc.jpg';
import upperEast from '/src/front/img/uppereastsidenyc.jpg';
import fini from '/src/front/img/Financenyc.jpg';
import hai from '/src/front/img/haightSF.png';
import marina1 from '/src/front/img/MarinaSF.jpg';
import mission1 from '/src/front/img/MissionSF.png';
import so from '/src/front/img/SoMA.png';
import wyn from '/src/front/img/Wynwood.jpg';
import dor from '/src/front/img/doral.png';
import brook from '/src/front/img/brooklynnyc.jpg';
import couple from '/src/front/img/you.png';
import dates from '/src/front/img/dates.png';
import { Typography } from "@mui/material";


export const Testing = () => {
  const {zipCode, setZipCode} = useContext(GlobalZipCode);
  const {token, setToken} = useContext(TokenIssued);
    const [appear, setAppear] = useState(false)
    const [luv, setLuv] = useState(false)
    const [loader, setLoader] = useState(false)
    const [imageZip, setImageZip] = useState(dates);
    const [city, setCity] =useState([]);
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


    const sanFran = {name1: "SoMa", name2:"Misson", name3:"Marina", name4:"Upper Haight", img1:so, img2:mission1, 
    img3:marina1, img4:hai, zip1:94107, zip2: 94110, zip3: 94133, zip4: 94117};
    const miami = {name1: "Wynwood", name2:"Brickell", name3:"South Beach", name4:"Doral", img1:wyn,
  img2:"https://a.cdn-hotels.com/gdcs/production156/d397/81ce7a3b-5be9-4d0c-89e2-ab7920d94bb9.jpg", img3:"https://seeklogo.com/images/M/miami-beach-logo-C677AF8447-seeklogo.com.png",img4:dor,
zip1: 33127, zip2: 33129, zip3: 33139, zip4: 33166};
const newYork = {name1:"Greenwhich/SoHo",name2:"Upper East Side",name3:"Brooklyn",name4:"Financial District", img1:soho, img2:upperEast,img3:brook,img4:fini, zip1:10012,zip2:10065,zip3:11205,zip4:10004};
    
    
    const cityPicker =(img,zip) => {
      
        return setZipCode(zip), setImageZip(img);
  
      };

 
  const run = ()=> {

    if(appear === false){
    return setTimeout(() => setLoader(false), 4000), setTimeout(() => setAppear(true), 1000),setLoader(true)}
    else {return setAppear(false)
    }

  };
  
  const love = ()=> {
    if(luv === false){
      return setLuv(true) }
      else {return setLuv(false)
      }

  };
  
  
    return (
    <>
    <MemberNavbar/>
  
      <div></div><div style={luv === false ? {background:"",marginLeft:"200px", marginRight:"200px", position:"relative"}:{position:"relative",background:"rgba(255,182,193, 0.55)",marginLeft:"200px", marginRight:"200px", border:"3px dashed pink"}}>
      
      
      <div><img style={{width:"300px", position:"absolute", top:"20px", borderRadius:"5%"}}src={imageZip}></img> <img style={{width:"200px",position:"absolute", left:"433px",bottom:"320px", zIndex:"-1"}}src={bree}/><br/>
</div>

      <Box style={{position:"absolute", left:"25%"}}
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
      
      >
        <button key="one" className="btn  btn-sm" style={{background:"#582131"}} onClick={()=> setCity(sanFran)}> S F</button>,
  <button key="two" className="btn  btn-sm" style={{background:"#00d5c8", color:"#9e0074"}} onClick={()=> setCity(miami)}>Miami</button>,
  <button key="three" className="btn  btn-sm" style={{background:"#304674"}}onClick={()=> setCity(newYork)}>NYC</button>
      </ButtonGroup>
      </Box>
  
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      
      <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={()=> cityPicker(city?.img1,city?.zip1) } style={{color:"#e8d190"}}>{city?.name1}</Button>
        <Button onClick={()=> cityPicker(city?.img2,city?.zip2) } style={{color:"#e8d190"}}>{city?.name2}</Button>
        <Button onClick={()=> cityPicker(city?.img3,city?.zip3)} style={{color:"#e8d190"}}>{city?.name3}</Button>
        <Button onClick={()=> cityPicker(city?.img4,city?.zip4)} style={{color:"#e8d190"}}>{city?.name4}</Button>
      </ButtonGroup>

    </Box>
      <button type="button" className="btn btn-primary btn-sm" style={{marginLeft:"45%", marginTop:"1%"}} onClick={()=> run()} >Best Options</button>
    

      
      <Switch  color="secondary" onChange={()=> love()}/> <div style={{marginLeft:"15px",display:"inline-block", fontSize:"20px", color:"white"}}>Cupid Shuffle</div>


      {loader == true ? (<div style={{position:"absolute", left:"37%", top:"11%", zIndex:"1",width:"400px", height:"400px", paddingLeft:"5%", paddingTop:"5%"}}><RingLoader size={322} loading={loader} margin={2} color={"rgb(62, 250, 247)"} /></div>):" " }

      

      <div style={{marginLeft:"1", marginTop:"1%"}}> { appear == false ? (<img style={{width:"400px", marginLeft:"37%",borderRadius:"7%"}}src={couple}  />):<div style={{width:"800px", marginLeft:"37%"}}><HeartBeat/></div> }</div>
     

      {/* <div id="house" style={{position:"absolute", right:"13%", bottom:"40%", background:"yellow"}}> 
      <div className="selectedDinner"> <div> <img style={{width:"75px"}} src={dinner?.image_url} /></div><div>{dinner?.name} </div></div>
       <div className="selectedDate"> <div> <img style={{width:"75px"}} src={date?.image_url} /> </div><div>{date?.name}</div></div>
       <div className="selectedDessert"> <div> <img style={{width:"75px"}} src={dessert?.image_url} /></div><div>{dessert?.name}</div></div>  </div> */}
      </div>
      
    </>
  );
};
