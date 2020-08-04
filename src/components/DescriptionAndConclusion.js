import React from "react";

import ReactMarkDown from "react-markdown";
import process from "./process";

export default function DescriptionAndConclusion() {
  return (
    <div>
      <ReactMarkDown source={process} />
    </div>
  );
}
