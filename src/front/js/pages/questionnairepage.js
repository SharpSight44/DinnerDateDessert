import React from "react";
import { MemberNavbar } from "../component/memberNavbar";
import { Questionnaire } from "../component/questionnaire";
import Surveyone from "../component/survey";

export const QuestionnairePage = () => {
  return (
    <>
      <MemberNavbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col"></div>
        </div>
        <Questionnaire />
        <Surveyone />
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
