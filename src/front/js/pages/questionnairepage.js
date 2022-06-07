import React from "react";
import { MemberNavbar } from "../component/memberNavbar";
import { Questionnaire } from "../component/questionnaire";

export const QuestionnairePage = () => {
  return (
    <>
      <MemberNavbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col"></div>
        </div>
        <Questionnaire />
        <div className="row">
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};
