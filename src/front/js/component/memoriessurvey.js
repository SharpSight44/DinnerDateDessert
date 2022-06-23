import React from "react";
import "survey-core/modern.min.css";
import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "../../styles/survey.css";

StylesManager.applyTheme("modern");

let surveyJson = {
  title: "DINNER DATE DESSERT",
  description: "Survey ",
  logoFit: "none",
  logoPosition: "right",
  completedHtml: "<h3>Thank you for completing the Questionnaire!</h3>",
  completedBeforeHtml:
    "<h3>Our records show that you have already completed this Questionnaire.</h3>",
  loadingHtml: "<h3>Loading Questionnaire...</h3>",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "rating",
          name: "question1",
          title:
            "How would you rate your most recent outing at *Name Activity*",
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
          minRateDescription: "Star",
          maxRateDescription: "Stars",
        },
        {
          type: "rating",
          name: "question2",
          title:
            "How would you rate your dining experience at *Name Restaurant*",
          isRequired: true,
          minRateDescription: "Star",
          maxRateDescription: "Stars",
        },
        {
          type: "rating",
          name: "question3",
          title: "How would you rate your dining experience at *Name Dessert*",
          isRequired: true,
          minRateDescription: "Star",
          maxRateDescription: "Stars",
        },
      ],
      visible: false,
      title: "Survey",
      description: "Survey",
    },
  ],
  triggers: [
    {
      type: "complete",
    },
  ],
  showTitle: false,
  navigateToUrlOnCondition: [{}],
  showPageNumbers: true,
  showQuestionNumbers: "off",
  showProgressBar: "bottom",
  progressBarType: "questions",
  maxTextLength: 1,
  maxOthersLength: 1,
  questionsOnPageMode: "questionPerPage",
  widthMode: "responsive",
};

function Surveytwo() {
  //send Ajax request to your web server
  const survey = new Model(surveyJson);
  return <Survey model={survey} />;
}
export default Surveytwo;
