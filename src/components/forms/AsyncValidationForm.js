import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import asyncValidate from "./asyncValidate";
// const {
//   DOM: { input, select, textarea }
// } = React;

const renderField = ({
  input,
  label,
  type,
  //checked is for radio, initialValue is for setting the username, password value
  checked,
  initialValue,
  meta: { asyncValidating, touched, error }
}) => {
  return (
    <div>
      <label>{label}</label>
      <div className={asyncValidating ? "async-validating" : ""}>
        <input
          {...input}
          value={initialValue} //add value attr
          checked={checked} //add checked attr
          type={type}
          placeholder={label}
        />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
};

class AsyncValidationForm extends React.Component {
  constructor(props) {
    super(props);
    console.log("AsyncValidationForm ---->");

    this.state = {
      //pass down VerticalLinearStepper.js state if any
      username: this.props.username ? this.props.username : "",
      password: this.props.password ? this.props.password : "",
      //this determines whether any fields is filled or not from VerticalLinearStepper
      pristine:
        this.props.username || this.props.password || !this.props.disabledNext
          ? false
          : true
    };
  }

  passRadioValue = e => {
    this.setState({ pristine: false }, () => {
      this.props.handleChangeDisabledNext(!e.target.checked);
    });
  };

  handleChange = name => event => {
    const value = event.target.value;
    this.setState(
      {
        [name]: value,
        pristine: false
      },
      () => {
        this.props.handleChange(name, value); //setState username, password of VerticalLinearStepper.js
      }
    );
  };

  resetForm = () => {
    this.props.handleChangeDisabledNext(true); //setState disabledNext of VerticalLinearStepper.js
    this.setState(
      {
        username: "",
        password: "",
        pristine: true
      },
      () => {
        this.props.handleChange("username", "");
        this.props.handleChange("password", "");
      }
    );

    this.props.reset();
  };

  // this.setState({ disabled: !this.state.disabled });

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="username"
          type="text"
          component={renderField}
          label="Username"
          initialValue={this.state.username}
          onChange={this.handleChange("username")}
        />
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
          initialValue={this.state.password}
          onChange={this.handleChange("password")}
        />

        <label>
          <Field
            name="sex"
            component={renderField}
            type="radio"
            value="male"
            checked={!this.props.disabledNext}
            onChange={this.passRadioValue}
          />{" "}
          Male
        </label>

        <div>
          <button type="submit" disabled={submitting}>
            Sign Up
          </button>
          <button
            type="button"
            disabled={(pristine || submitting) && this.state.pristine} //add state.pristine checking
            onClick={this.resetForm}
          >
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "asyncValidation", // a unique identifier for this form
  validate,
  asyncValidate,
  asyncBlurFields: ["username"]
})(AsyncValidationForm);
