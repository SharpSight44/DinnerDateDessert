import React from "react";
import "survey-core/modern.min.css";
import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";

StylesManager.applyTheme("modern");

const surveyJson = {
  elements: [
    { name: "FirstName", title: "Enter your first name:", type: "text" },
    { name: "LastName", title: "Enter your last name:", type: "text" },
  ],
};
function Surveyone() {
  const survey = new Model(surveyJson);
  return <Survey model={survey} />;
}
export default Surveyone;
