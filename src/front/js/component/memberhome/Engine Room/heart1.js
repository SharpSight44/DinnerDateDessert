import React, { useContext, useState } from "react";
import Switch from '@mui/material/Switch';
import { MemberNavbar } from "../../memberNavbar";
import RingLoader from "react-spinners/RingLoader";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import select from '/src/front/img/selectone.png';
import { GlobalZipCode } from "../../../layout";
import { HeartBeat } from "./heartBeat1";

export const Testing = () => {
  const {zipCode, setZipCode} = useContext(GlobalZipCode);
    const [appear, setAppear] = useState(false)
    const [luv, setLuv] = useState(false)
    const [loader, setLoader] = useState(false)
    const [imageZip, setImageZip] = useState(false)


    const brickellLoad =() => {
      const brick ="https://a.cdn-hotels.com/gdcs/production156/d397/81ce7a3b-5be9-4d0c-89e2-ab7920d94bb9.jpg";
        return setZipCode(33129), setImageZip(brick);
  
      };
    const wynwoodLoad =() => {
      const wynwood ="https://therealdeal.com/miami/wp-content/uploads/2019/06/Wynwood-Credit-Metro-1-650x365.jpg";
        return setZipCode(33127), setImageZip(wynwood);
  
      };

    const southBeachLoad =() => {
    const beach ="https://seeklogo.com/images/M/miami-beach-logo-C677AF8447-seeklogo.com.png";
      return setZipCode(33139), setImageZip(beach);

    };


  
  const run = ()=> {

    if(appear === false){
    return setTimeout(() => setLoader(false), 4000), setTimeout(() => setAppear(true), 3000),setLoader(true)}
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
      
      
      <div><img style={{width:"300px", position:"absolute", top:"20px"}}src={imageZip}></img> <img style={{width:"200px",position:"absolute", left:"422px",top:"-10px", zIndex:"-1"}}src={select} /></div>
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
        <Button onClick={()=> wynwoodLoad() } style={{color:"#e8d190"}}>Wynwood</Button>
        <Button onClick={()=> brickellLoad() } style={{color:"#e8d190"}}>Brickell</Button>
        <Button onClick={()=> southBeachLoad()} style={{color:"#e8d190"}}>South Beach</Button>
      </ButtonGroup>
    </Box>
      <button type="button" className="btn btn-primary btn-sm" style={{marginLeft:"45%", marginTop:"1%"}} onClick={()=> run()} >Next Core Moment</button>
      
      <Switch  color="secondary" onChange={()=> love()}/> <div style={{display:"inline-block", fontSize:"20px", color:"white"}}>Enable Love Lock</div>

      {loader == true ? (<div style={{position:"absolute", left:"37%", top:"11%", zIndex:"1",width:"400px", height:"400px", background:"rgb(16,39,33)", paddingLeft:"5%", paddingTop:"5%"}}><RingLoader size={222} loading={loader} margin={2} color={"rgb(62, 250, 247)"} /></div>):" " }

      

      <div style={{marginLeft:"1", marginTop:"1%"}}> { appear == false ? (<img style={{width:"400px", marginLeft:"37%",paddingBottom:"50px"}}src="https://i.pinimg.com/originals/43/13/7c/43137c93e81c667e01c6b32e340572df.png"  />):<div style={{width:"400px", marginLeft:"37%"}}><HeartBeat/></div> }</div>
     
      </div>
    </>
  );
};
