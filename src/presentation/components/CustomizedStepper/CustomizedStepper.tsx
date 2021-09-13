import { FC, useState } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import SummaryCart from '../SummaryCart/SummaryCart';
import PurchaseConfirmation from '../PurchaseConfirmation/PurchaseConfirmation';
import UserInfoForm from '../UserInfoForm/UserInfoForm';
import UserPaymentForm from '../UserPaymentForm/UserPaymentForm';
import Alert from '../Alert/Alert';

import QontoStepIcon from "./QontoStepIcon/QontoStepIcon";
import { QontoConnector } from "./customized-stepper.style";
import { useStyles } from "./customized-stepper.style";
import { setDisplayModal } from '../../../domain/redux/slice/root-slice';
import { isValidUserInfo, isValidPaymentInfo } from '../../../domain/redux/selector/checkout.selector';
import { Box } from '@material-ui/core';

function getSteps() {
    return ['Cart', 'Information', 'Payment'];
}

const CustomizedStepper: FC<any> = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const isValidUser = useSelector(isValidUserInfo);
    const isValidPayment = useSelector(isValidPaymentInfo);

    const handleNext = () => {
        if(validateForm()){
            if (activeStep === 2) {
                props.checkout();
            }
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
            dispatch(setDisplayModal({
                type: 'error',
                state: true,
                text: "The information is invalid, please check before continuing.",
                autoHideDuration: 5000
            }));
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const validateForm = () => {
        switch (activeStep) {
            case 0:
                return true;
            case 1:
                return isValidUser;
            case 2:
                return isValidPayment;
            default:
                return false;
        }
        
    };

    const getStepContent = (step: any) => {
        switch (step) {
            case 0:
                return <SummaryCart/>;
            case 1:
                return <UserInfoForm />;
            case 2:
                return <UserPaymentForm />;
            default:
                return 'Unknown step';
        }
    };

    return (
        <div className={classes.root}>
            <Alert />
            <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<QontoConnector />}
            >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <form noValidate autoComplete="off">
                <div >
                    {activeStep === steps.length ? (
                        <PurchaseConfirmation />
                    ) : (
                        <div> 
                            {getStepContent(activeStep)}
                            <Box display="flex" justifyContent="flex-end">
                                <div className={classes.wrapperBtn}>
                                    <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Pay now' : 'Next'}
                                    </Button>
                                </div>
                            </Box>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}

export default CustomizedStepper;