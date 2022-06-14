import React, {useContext}from "react";
import { Link } from "react-router-dom";
import logosize300x268 from "../../img/logosize300x268.jpg";
import { LoginWindow } from "../layout";

export const Navbar = () => {
  const {logStatus, setLogStatus} = useContext(LoginWindow)
  const promptLogin = ()=>{
return setLogStatus(true);
  };
  return (
    <nav className="navbar navbar-sucess bg-success">
      <div className="container-fluid">
        <Link to="/about">
          <span className="navbar-brand mb-0 h1">
            <img src={logosize300x268} height={80} width={170} alt="logo" />
          </span>
        </Link>
        <div className="ml-auto">
          <Link to="/">
            <button className="btn btn-dark">DinnerDateDessert</button>
          </Link>
        </div>
        <div className="ml-auto">
        
            <button onClick={()=> promptLogin() } className="btn btn-dark">Signup/Login</button>
        
        </div>
        <div className="ml-auto">
        <Link to="/questionnaire">
              <button className="btn btn-dark">Questionnaire</button>
            </Link>
        </div>
        <div className="ml-auto">
          <Link to="/sandbox">
            <button className="btn btn-dark">Leo's Sandbox</button>
          </Link>
          
        </div>
      </div>
    </nav>
  );
};
