import React, { useState } from "react";
import HelperTextAligned from "../component/mui/loginField";
import logosize300x268 from "../../img/logosize300x268.jpg";
import RegisterCom from "../component/mui/registerform";

export const EmailLogin = ()=>{
    const [login, setLogin] =useState(false);



    return (
        <>
        <div>
        <img src={logosize300x268}  style={{width:"268px"}} alt="logo" />
        <div>{ login == false ? (<div><HelperTextAligned />
        <h3 style={{marginLeft:"25px", fontSize:"20px"}}>New? Click below To Register</h3>
        <button style={{marginLeft:"100px"}} onClick={()=> setLogin(true)}>Register</button></div>):<RegisterCom/> }</div>
        </div>
        
        
        
        
        



        </>
 );
};