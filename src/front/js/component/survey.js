import React from "react";
import "survey-core/modern.min.css";
import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";

StylesManager.applyTheme("modern");

const surveyJson = {
  title: "test",
  description: "test",
  logoPosition: "right",
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
          rows: ["Row 1"],
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
};

function Surveyone() {
  const survey = new Model(surveyJson);
  return <Survey model={survey} />;
}
export default Surveyone;
