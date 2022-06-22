import React from "react";
import StepTemplate from "./StepTemplate";

import AsyncValidationForm from "../forms/AsyncValidationForm";

const Step = props => (
  <StepTemplate
    text={`
        For each ad campaign that you create, you can control how much you're
        willing to spend on clicks and conversions, which networks and
        geographical locations you want your ads to show on, and more.

        For each ad campaign that you create, you can control how much you're
        willing to spend on clicks and conversions, which networks and
        geographical locations you want your ads to show on, and more.

        For each ad campaign that you create, you can control how much you're
        willing to spend on clicks and conversions, which networks and
        geographical locations you want your ads to show on, and more.

        For each ad campaign that you create, you can control how much you're
        willing to spend on clicks and conversions, which networks and
        geographical locations you want your ads to show on, and more.

        For each ad campaign that you create, you can control how much you're
        willing to spend on clicks and conversions, which networks and
        geographical locations you want your ads to show on, and more.

        For each ad campaign that you create, you can control how much you're
        willing to spend on clicks and conversions, which networks and
        geographical locations you want your ads to show on, and more.

        For each ad campaign that you create, you can control how much you're
        willing to spend on clicks and conversions, which networks and
        geographical locations you want your ads to show on, and more.

        For each ad campaign that you create, you can control how much you're
        willing to spend on clicks and conversions, which networks and
        geographical locations you want your ads to show on, and more.

        For each ad campaign that you create, you can control how much you're
        willing to spend on clicks and conversions, which networks and
        geographical locations you want your ads to show on, and more.

        For each ad campaign that you create, you can control how much you're
        willing to spend on clicks and conversions, which networks and
        geographical locations you want your ads to show on, and more.

        For each ad campaign that you create, you can control how much you're
        willing to spend on clicks and conversions, which networks and
        geographical locations you want your ads to show on, and more.

        For each ad campaign that you create, you can control how much you're
        willing to spend on clicks and conversions, which networks and
        geographical locations you want your ads to show on, and more.
    `}
    //we want to apply checking on Step1.js, so we add checkDisabledNext attribute
    checkDisabledNext={true}
    // disabledNext={this.props.disabledNext} //no need to do this because will be passed with  {...props} below
    {...props}
  >
    <form>
      form for the first step here
      <div>test here</div>
      <AsyncValidationForm
        onSubmit={values => {
          console.log(values);
          alert(
            `Values: username: ${values.username} password: ${values.password}`
          );
        }}
        //these are the props passed down from VerticalLinearStepper.js
        handleChangeDisabledNext={props.handleChangeDisabledNext}
        disabledNext={props.disabledNext}
        handleChange={props.handleChange}
        username={props.username}
        password={props.password}
      />
    </form>
  </StepTemplate>
);
export default Step;
