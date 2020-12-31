import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Button,
  StepButton,
  Step,
  Stepper,
  CircularProgress,
} from '@material-ui/core';

import authApi from '../../../apis/auth';
import { successMessage, errorMessage } from '../../../redux/actions/snack';
import Snack from '../../../components/Snack';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    'Nhận đơn hàng từ người dùng',
    'Chuyển đơn hàng đến đơn vị giao hàng',
    'Giao hàng cho người dùng',
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Step 1: Nhận đơn hàng từ người dùng...';
    case 1:
      return 'Step 2: Chuyển đơn hàng đến đơn vị giao hàng?';
    case 2:
      return 'Step 3: Giao hàng cho người dùng!';
    default:
      return 'Unknown step';
  }
}

export default function HorizontalNonLinearAlternativeLabelStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(new Set());
  const [skipped, setSkipped] = useState(new Set());
  const [updateLoading, setUpdateLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { booking_id } = useParams();
  const steps = getSteps();

  const totalSteps = () => {
    return getSteps().length;
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const skippedSteps = () => {
    return skipped.size;
  };

  const completedSteps = () => {
    return completed.size;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps() - skippedSteps();
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed
          // find the first step that has been completed
          steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleComplete = () => {
    const newCompleted = new Set(completed);
    newCompleted.add(activeStep);
    setCompleted(newCompleted);

    /**
     * Sigh... it would be much nicer to replace the following if conditional with
     * `if (!this.allStepsComplete())` however state is not set when we do this,
     * thus we have to resort to not being very DRY.
     */
    if (completed.size !== totalSteps() - skippedSteps()) {
      handleNext();
    }
  };

  const handleUpdate = async () => {
    setUpdateLoading(true);
    authApi
      .patch('/payment/admin/tracking', { booking_id })
      .then((res) => {
        setUpdateLoading(false);
        dispatch(successMessage(res.data.message));
        history.push('/payment/admin');
      })
      .catch((err) => {
        const message =
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message;
        dispatch(errorMessage(message));
      });
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  function isStepComplete(step) {
    return completed.has(step);
  }

  return (
    <div className={classes.root}>
      <Snack />
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const buttonProps = {};
          if (isStepOptional(index)) {
            buttonProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepButton completed={isStepComplete(index)} {...buttonProps}>
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              Đã hoàn thành các bước giao hàng. Hãy cập nhật trạng thái đơn hàng
            </Typography>
            <Button
              onClick={handleUpdate}
              color="primary"
              variant="contained"
              style={{ color: 'white' }}
              disableElevation
              disableFocusRipple
            >
              {updateLoading ? (
                <CircularProgress style={{ color: '#fff' }} size={24} />
              ) : (
                'Cập nhật'
              )}
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              {isStepOptional(activeStep) && !completed.has(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                  style={{ color: 'white' }}
                  disableElevation
                  disableFocusRipple
                >
                  Skip
                </Button>
              )}

              {activeStep !== steps.length &&
                (completed.has(activeStep) ? (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleComplete}
                    style={{ color: 'white' }}
                    disableElevation
                    disableFocusRipple
                  >
                    {completedSteps() === totalSteps() - 1
                      ? 'Kết thúc'
                      : 'Thực hiện'}
                  </Button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
