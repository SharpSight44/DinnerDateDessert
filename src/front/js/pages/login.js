import React, {useContext} from "react";
import Google from "../component/memberhome/google";
import { LoginWindow } from "../layout";

export const Login = () => {
  const {logStatus, setLogStatus} = useContext(LoginWindow)

  

  const exit = ()=>{
return setLogStatus(false)
  };
  return (
    <>
      
      <div style={{width:"700px", height:"467px", display:"flex"}}>
        <div style={{width:"50%", background:"#fcfcfc", borderTopLeftRadius:"5%", borderBottomLeftRadius:"5%"}}><p style={{fontSize:"25px", margin:"20px", fontWeight:"bold"}}>Log in or sign up in seconds </p><p style={{marginLeft:"20px",marginRight:"10px",fontSize:"14px"}}>Use your email or another service to continue with Dinner Date Dessert (it's free)!</p><div style={{marginLeft:"40px", marginTop:"15px"}}><Google /></div> <div style={{marginLeft:"95px", marginBottom:"10px"}}><button style={{background:"#035E47",color:"#faebd7",fontFamily:"Playfair Display, serif", fontWeight:"bold"}}>Login With Email</button></div><p style={{marginLeft:"20px"}}>By continuing, you agree to Dinner Date Dessert <a href="">Terms of Use</a>. Read our <a href="">Privacy Policy</a>.</p>
        <div style={{marginLeft:"125px"}}><button onClick={()=> exit()}>Exit Login</button></div></div>
        <div style={{width:"50%", borderTopRightRadius:"5%", borderBottomRightRadius:"5%"}}><img style={{borderTopRightRadius:"5%", borderBottomRightRadius:"5%"}}src="https://magazineen-ed3b.kxcdn.com/en/magazine/wp-content/uploads/2020/05/pretty-couple-fun-date-restaurant.jpg" /></div>
        
      </div>
    </>
  );
};
