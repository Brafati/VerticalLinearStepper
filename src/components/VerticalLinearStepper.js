import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";

const styles = theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2
  },
  resetContainer: {
    padding: theme.spacing.unit * 3
  }
});

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    //we set our state in this parent
    disabledNext: true,
    username: "",
    password: ""
  };

  steps = {
    "Select campaign settings": Step1,
    "Create an ad group": Step2,
    "Create an ad": Step3
  };

  //setState for disabledNext
  handleChangeDisabledNext = value => {
    this.setState({ disabledNext: value });
  };
  //setState for username, password
  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  stepsCount = () => Object.values(this.steps).length;

  canGoBack = () => this.state.activeStep > 0;
  canGoForward = () => this.state.activeStep < this.stepsCount();

  isFinished = () => this.state.activeStep === this.stepsCount();

  handleBack = () => {
    if (this.canGoBack()) {
      this.setState(prevState => ({ activeStep: prevState.activeStep - 1 }));
    }
  };

  handleNext = () => {
    if (this.canGoForward()) {
      this.setState(prevState => ({ activeStep: prevState.activeStep + 1 }));
    }
  };

  handleReset = () => this.setState({ activeStep: 0 });

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {Object.entries(this.steps).map(([label, CustomStep]) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <CustomStep
                  canGoBack={this.canGoBack()}
                  canGoForward={this.canGoForward()}
                  onBack={this.handleBack}
                  onNext={this.handleNext}
                  classes={classes}
                  //we pass down the state and its' setState method
                  handleChangeDisabledNext={this.handleChangeDisabledNext}
                  disabledNext={this.state.disabledNext}
                  handleChange={this.handleChange}
                  username={this.state.username}
                  password={this.state.password}
                />
              </StepContent>
            </Step>
          ))}
        </Stepper>

        {this.isFinished() && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(VerticalLinearStepper);
