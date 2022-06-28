import React, { useContext } from "react";
import RecipeReviewCard from "../recipecard";
import { Redirect } from "react-router-dom";
import { ProtectedPath, LoginWindow } from "../../layout";
import { MemberNavbar } from "../memberNavbar";
import { useHistory } from "react-router-dom";
import { UpComingEngine } from "./SavedOutings/upComingEngine";

export const Upcomingoutingspage = () => {
  const { approved, setApproved } = useContext(ProtectedPath);
  const { logStatus, setLogStatus } = useContext(LoginWindow);
  //Above Code is not in use yet// Will Be For Protected paths MUST BE LOGGED IN TO ACCESS When ENABLED

  return (
    <>
      <MemberNavbar />
      <UpComingEngine />
    </>
  );
};
