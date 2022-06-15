import React,{useContext} from "react";
import RecipeReviewCard from "../recipecard";
import { Redirect } from "react-router-dom";
import { ProtectedPath, LoginWindow } from "../../layout";
import { MemberNavbar } from "../memberNavbar";
import { useHistory } from "react-router-dom";

export const Upcomingoutingspage = () => {
  const { approved, setApproved} = useContext(ProtectedPath);
  const { logStatus, setLogStatus} = useContext(LoginWindow);

  const history = useHistory();

  if( approved == false){
    return  history.push('/'), setLogStatus(true) ;
  } else {
  
  return (
    <>
    <MemberNavbar/>
      <div style={{ display: "inline-block", marginLeft: "30px" }}>
        Hello
        <RecipeReviewCard />
      </div>
      <div style={{ display: "inline-block", marginLeft: "30px" }}>
        <RecipeReviewCard />
      </div>
      <div style={{ display: "inline-block", marginLeft: "30px" }}>
        <RecipeReviewCard />
      </div>
    </>
  );}
};
