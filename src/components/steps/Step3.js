import React from "react";

import StepTemplate from "./StepTemplate";

const Step = props => (
  <StepTemplate
    text={`
        Try out different ad text to see what brings in the most customers,
        and learn how to enhance your ads using features like ad extensions.
        If you run into any problems with your ads, find out how to tell if
        they're running and how to resolve approval issues.
    `}
    {...props}
  >
    <form>form for the third step here</form>
  </StepTemplate>
);

export default Step;
