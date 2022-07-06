import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import { MemberNavbar } from "../memberNavbar";
import "../../../styles/desires.css";
import { TbStar } from "react-icons/tb";
import { RiStarFill } from "react-icons/ri";
import { getDateList, getDessertList, getDinnerList } from "../apiExplore";
import { DataBaseChange } from "../../layout";


export const Desires = () => {
    
    const {dataUpdate, setDataUpdate} = useContext(DataBaseChange);
    const [dinnerList, setDinnerList] = useState([]);
    const [dateList, setDateList] = useState([]);
    const [dessertList, setDessertList] = useState([]);
 


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




    return (
        <>
            <MemberNavbar />
            <div className="container">
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
                                        <h6 className="card-subtitle mb-2">Price</h6>
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
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                    }
                </div>
            </div>
        </>
    );
};