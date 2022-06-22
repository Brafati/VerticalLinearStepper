import React, { Fragment } from "react";

import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const StepTemplate = ({
  classes,
  canGoBack,
  canGoForward,
  onBack,
  onNext,
  text,
  children,
  //we pass down these 2 values
  disabledNext,
  checkDisabledNext
}) => (
  <Fragment>
    <Typography>{text}</Typography>

    <div className={classes.actionsContainer}>
      <div>
        {children}

        <Button
          disabled={!canGoBack}
          onClick={onBack}
          className={classes.button}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={onNext}
          className={classes.button}
          //determine whether we should check button disabled or not
          disabled={checkDisabledNext ? disabledNext : false}
        >
          {canGoBack ? "Next" : "go to next step"}
        </Button>
      </div>
    </div>
  </Fragment>
);

export default StepTemplate;
