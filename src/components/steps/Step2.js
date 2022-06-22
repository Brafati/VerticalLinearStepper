import React from "react";

import StepTemplate from "./StepTemplate";

const Step = props => (
  <StepTemplate
    text={`
        An ad group contains one or more ads which target a shared set of keywords.
    `}
    {...props}
  >
    <form>form for the second step here</form>
  </StepTemplate>
);

export default Step;
