import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import { MemberNavbar } from "../memberNavbar";
import "../../../styles/desires.css";
import { TbStar } from "react-icons/tb";
import { RiStarFill } from "react-icons/ri";
import { getDateList, getDessertList, getDinnerList } from "../apiExplore";
import { DataBaseChange } from "../../layout";
import { postUpcoming } from "./Engine Room/upComingApi";
import BasicModal from "./Engine Room/modal";
import ImgMediaCard from "./Engine Room/selectedCards";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';



export const Desires = () => {
    
    const {dataUpdate, setDataUpdate} = useContext(DataBaseChange);
    const [dinnerList, setDinnerList] = useState([]);
    const [dateList, setDateList] = useState([]);
    const [dessertList, setDessertList] = useState([]);
    const[sdin,setSdin] = useState([]);
    const[sdate,setSdate] = useState([]);
    const[sdes,setSdes] = useState([]);
    const [modal,setModal]= useState(false);
 
const selectDinner =(object)=>{
return setSdin(object);
};

const selectDate =(object)=>{
return setSdate(object);
};

const selectDessert =(object)=>{
    return setSdes(object);
    };

    useEffect(() => {
        const fn = async () => {
            const apiRest = await getDinnerList();
            return setDinnerList(apiRest), console.log(dinnerList);
        };
        fn();
    }, [dataUpdate]); 

    useEffect(() => {
        const fn = async () => {
            const apiRest = await getDateList();
            return setDateList(apiRest);
        };
        fn();
    }, [dataUpdate]);

    useEffect(() => {
        const fn = async () => {
            const apiRest = await getDessertList();
            return setDessertList(apiRest);
        };
        fn();
    }, [dataUpdate]); 

    const saveStack = (dinner, dinImg, dinLoc, dessert,desImg, desLoc,dateName,dateImg,dateDes) =>{

        const setStack = {dinner:dinner, dinImg:dinImg, dinLoc:dinLoc, dessert:dessert,desImg:desImg,desLoc:desLoc,dateName:dateName,dateImg:dateImg,dateDes:dateDes};
        const render = dataUpdate + 1 ;
    
    
    
        return setModal(true), setTimeout(()=> setModal(false),4000) ,postUpcoming(setStack), setDataUpdate(render), setSdin([]), setSdate([]), setSdes([]);
    
    
      };




    return (
        <>
            <MemberNavbar />
            <div style={{display:"flex"}}>
                
            <div  >
                <h1 className="page-title text-white text-center">Dinner Desires</h1>
                <div className="row">
                {dinnerList.map((item, index) => {
                        return (
                            <div key={index} className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                <div className="card bg-transparent border-0 rouded" style={{ width: "18rem" }}>
                                    <img src={item?.dinImg} className="card-img-top desirecard-img rounded" alt="..." />
                                    <div className="card-body desirecard-body rounded">
                                        <h5 className="card-title">{item.dinner}</h5>
                                        <h6 className="card-subtitle mb-2"><RiStarFill /> {item.dinRating}</h6>
                                        <h6 className="card-subtitle mb-2">{item?.dinLoc}</h6>
                                        <h6 className="card-text mb-2">  
                                        <FormControlLabel labelPlacement="start" style={{marginInlineEnd:"15px"}}
        label={<Typography  fontSize="17px" color="#cab105">Select this Dinner</Typography>}
        control={<Checkbox onChange={()=> selectDinner(item)} size="small" sx={{'& .MuiSvgIcon-root': { fontSize: 18 },
          color: "#cab105",
          '&.Mui-checked': {
            color: "#cab105",
          },
        }} />}
      />    
                                        
                                        </h6>
                                    </div>
                                </div>
                                
                            </div>
                        )
                    }
                    )
                    }
                </div>
                <h1 className="page-title text-white text-center">Activities Desires</h1>
                <div className="row">
                
                    {dateList.map((item, index) => {
                        return (
                            <div key={index} className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                <div className="card bg-transparent border-0 rouded" style={{ width: "18rem" }}>
                                    <img src={item?.dateImg} className="card-img-top desirecard-img rounded" alt="..." />
                                    <div className="card-body desirecard-body rounded">
                                        <h5 className="card-title">{item?.date}</h5>
                                        <h6 className="card-subtitle mb-2"><RiStarFill /> </h6>
                                        <h6 className="card-text mb-2">
                                        <FormControlLabel labelPlacement="start" style={{marginInlineEnd:"15px"}}
        label={<Typography  fontSize="17px" color="#2fcf18"> Select This Activity</Typography>}
        control={<Checkbox onChange={()=> selectDate(item)} size="small" sx={{'& .MuiSvgIcon-root': { fontSize: 18 },
          color: "#2fcf18",
          '&.Mui-checked': {
            color: "#2fcf18",
          },
        }} />}
      />
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                    }
                </div>
                <h1 className="page-title text-white text-center">Delicious Desires</h1>
                <div className="row">
                
                    {dessertList.map((item, index) => {
                        return (
                            <div key={index} className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                <div className="card bg-transparent border-0 rouded" style={{ width: "18rem" }}>
                                    <img src={item?.desImg} className="card-img-top desirecard-img rounded" alt="..." />
                                    <div className="card-body desirecard-body rounded">
                                        <h5 className="card-title">{item.dessert}</h5>
                                        <h6 className="card-subtitle mb-2"><RiStarFill /> {item?.desRating}</h6>
                                        <h6 className="card-subtitle mb-2">{item?.desLoc}</h6>
                                        <h6 className="card-text mb-2"><FormControlLabel labelPlacement="start" style={{marginInlineEnd:"15px"}}
              label={<Typography  fontSize="17px" color="#ff2565">Select Dessert</Typography>}
        
        control={<Checkbox onChange={()=> selectDessert(item)} size="small"  sx={{'& .MuiSvgIcon-root': { fontSize: 18 },
          color: "#ff2565",
          '&.Mui-checked': {
            color: "#ff2565",
          },
        }} />}
      /></h6>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    }
                    )
                    }
                </div>
            
            </div>
            
            <div style={{width:"500px", marginLeft:"70px", marginTop:"4%"}}>
              <div style={{position:"sticky", top:"4%"}}>
                <div>
                <h1 style={{color:"white", fontSize:"22px"}}> Build Desired Outing</h1>
               { sdin == false? "":(<ImgMediaCard im={sdin?.dinImg} title="Selected Dinner" des={sdin?.dinner} />) }
              </div>
              <div style={{marginTop:"10px"}}>
                { sdate ==false ? "":(<ImgMediaCard im={sdate?.dateImg} title="Selected Activity" des={sdate?.date} />)}
              </div>
              <div style={{marginTop:"10px"}}>
               { sdes == false? "":(<ImgMediaCard im={sdes?.desImg} title="Selected dessert" des={sdes?.dessert} />)}
              </div>
              { sdin == false? "":(<button className="btn  btn-sm" style={{marginLeft:"15%",background:"#44a11d"}} onClick={()=> saveStack(sdin?.dinner,sdin?.dinImg,sdin?.dinLoc,sdes?.dessert,sdes?.desImg,sdes?.desLoc,sdate?.date,sdate?.dateImg,sdate?.dateDes)}>Save Stack</button>)}
               <BasicModal status={modal}/>
               </div>
              </div>
              
              </div>
        </>
    );
};