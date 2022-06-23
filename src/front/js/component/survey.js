import React from "react";
import "survey-core/modern.min.css";
import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "../../styles/survey.css";

StylesManager.applyTheme("modern");
const surveyJson = {
  title: "        ",
  description: "     ",
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
          type: "matrix",
          name: "test question",
          title: "Do You Like Pizza?",
          hideNumber: true,
          columns: [
            {
              value: "Column 1",
              text: "Avoid",
            },
            {
              value: "Column 2",
              text: "Don't Care",
            },
            {
              value: "Column 3",
              text: "Neutral",
            },
            {
              value: "Column 4",
              text: "Like",
            },
            {
              value: "Column 5",
              text: "Love!",
            },
          ],
          rows: [
            {
              value: "",
              text: "",
            },
          ],
        },
        {
          type: "matrix",
          name: "question1",
          title: "Are You Vegan?",
          hideNumber: true,
          columns: [
            {
              value: "Column 1",
              text: "Avoid",
            },
            {
              value: "Column 2",
              text: "Don't Care",
            },
            {
              value: "Column 3",
              text: "Neutral",
            },
            {
              value: "Column 4",
              text: "Like",
            },
            {
              value: "Column 5",
              text: "Love!",
            },
          ],
          rows: [
            {
              value: "",
              text: "",
            },
          ],
        },
        {
          type: "matrix",
          name: "question2",
          title: "Do You Like Middle-Eastern Food?",
          hideNumber: true,
          columns: [
            {
              value: "Column 1",
              text: "Avoid",
            },
            {
              value: "Column 2",
              text: "Don't Care",
            },
            {
              value: "Column 3",
              text: "Neutral",
            },
            {
              value: "Column 4",
              text: "Like",
            },
            {
              value: "Column 5",
              text: "Love!",
            },
          ],
          rows: [
            {
              value: "",
              text: "",
            },
          ],
        },
        {
          type: "matrix",
          name: "question3",
          title: "Are You Here For Vacation?",
          hideNumber: true,
          columns: [
            {
              value: "Column 1",
              text: "Avoid",
            },
            {
              value: "Column 2",
              text: "Don't Care",
            },
            {
              value: "Column 3",
              text: "Neutral",
            },
            {
              value: "Column 4",
              text: "Like",
            },
            {
              value: "Column 5",
              text: "Love!",
            },
          ],
          rows: [
            {
              value: "",
              text: "",
            },
          ],
        },
        {
          type: "matrix",
          name: "question4",
          title: "Do You Like To Eat Meat?",
          hideNumber: true,
          columns: [
            {
              value: "Column 1",
              text: "Avoid",
            },
            {
              value: "Column 2",
              text: "Don't Care",
            },
            {
              value: "Column 3",
              text: "Neutral",
            },
            {
              value: "Column 4",
              text: "Like",
            },
            {
              value: "Column 5",
              text: "Love!",
            },
          ],
          rows: [
            {
              value: "",
              text: "",
            },
          ],
        },
        {
          type: "matrix",
          name: "question5",
          title: "Do You Enjoy Doing Activities At Night?",
          hideNumber: true,
          columns: [
            {
              value: "Column 1",
              text: "Avoid",
            },
            {
              value: "Column 2",
              text: "Don't Care",
            },
            {
              value: "Column 3",
              text: "Neutral",
            },
            {
              value: "Column 4",
              text: "Like",
            },
            {
              value: "Column 5",
              text: "Love!",
            },
          ],
          rows: [
            {
              value: "",
              text: "",
            },
          ],
        },
        {
          type: "matrix",
          name: "question6",
          title: "Do You Like Music?",
          hideNumber: true,
          columns: [
            {
              value: "Column 1",
              text: "Avoid",
            },
            {
              value: "Column 2",
              text: "Don't Care",
            },
            {
              value: "Column 3",
              text: "Neutral",
            },
            {
              value: "Column 4",
              text: "Like",
            },
            {
              value: "Column 5",
              text: "Love!",
            },
          ],
          rows: [
            {
              value: "",
              text: "",
            },
          ],
        },
      ],
    },
    {
      name: "page2",
    },
    {
      name: "page3",
    },
  ],
  triggers: [
    {
      type: "complete",
    },
  ],
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

function Surveyone() {
  const survey = new Model(surveyJson);
  survey.onUpdateQuestionCssClasses.add(function (survey, options) {
    var classes = options.cssClasses;
    classes.mainRoot += " sv_qstn2";
    classes.root = "sq-root";
    classes.title += " sq-title";
    if (options.question.isRequired) {
      classes.title += " sq-title-required";
      classes.root += " sq-root-required";
    }
    if (options.question.getType() === "checkbox") {
      classes.root += " sq-root-cb";
    }
  });
  return <Survey model={survey} />;
}
export default Surveyone;
