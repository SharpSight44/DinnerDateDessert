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
          title: "Q1",
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
              value: "Row 1",
              text: "SAMPLE Q 1",
            },
          ],
        },
        {
          type: "matrix",
          name: "question1",
          title: "Q2",
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
              value: "Row 1",
              text: "SAMPLE Q 2",
            },
          ],
        },
        {
          type: "matrix",
          name: "question2",
          title: "Q3",
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
              value: "Row 1",
              text: "SAMPLE Q 3",
            },
          ],
        },
        {
          type: "matrix",
          name: "question3",
          title: "Q4",
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
              value: "Row 1",
              text: "SAMPLE Q 4",
            },
          ],
        },
        {
          type: "matrix",
          name: "question4",
          title: "Q5",
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
              value: "Row 1",
              text: "SAMPLE Q 5",
            },
          ],
        },
        {
          type: "matrix",
          name: "question5",
          title: "Q6",
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
              value: "Row 1",
              text: "SAMPLE Q 6",
            },
          ],
        },
        {
          type: "matrix",
          name: "question6",
          title: "Q7",
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
              value: "Row 1",
              text: "SAMPLE Q 7",
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
  return <Survey model={survey} />;
}
export default Surveyone;
