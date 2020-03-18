import React, { useState } from 'react';
//import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import { Step, StepLabel, Stepper, Typography, Button, Grid } from '@material-ui/core';
import IdentityForm from '../components/IdentityForm';
import ReasonForm from '../components/ReasonForm';
import SignatureForm from '../components/SignatureForm';
import PDFGeneration from '../components/Download';
import Download from '../components/Download';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100%',
        overflowX: 'hidden',
    },
    content: {
        height: 'calc(100% - 130px)',
        marginTop: '60px',
        padding: '16px',
        overflowY: 'scroll',
    },
    stepperContainer: {
        width: '100%',
        position: 'fixed',
        top: 0,
    },
    stepper: {
        
    },
    buttons: {
        width: 'calc(100% - 32px)',
        position: 'fixed',
        left: 0,
        bottom: 0,
        padding: 16,
        backgroundColor: theme.palette.backgroundColor,
        display: 'flex',
        justifyContent: 'center',
      },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
  }));
  
  function getSteps() {
    return ['Identité', 'Motif', 'Signature'];
  }
  
  export default function Main() {
  
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [readyForNextStep, setReadyForNextStep] = useState(false);
    const steps = getSteps();

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [address, setAddress] = useState("");
    const [reason, setReason] = useState("#1");
    const [signature, setSignature] = useState(null);
    const [place, setPlace] = useState("");
    const [signatureDate, setSignatureDate] = useState(null);

    const getStepContent = step => {
        switch (step) {
            case 0:
            return( 
                <IdentityForm 
                    firstname={firstname}
                    lastname={lastname}
                    date={dateOfBirth}
                    address={address}
                    onStateUpdate={({ready, firstname, lastname, date, address}) => {
                        setReadyForNextStep(ready);
                        setFirstname(firstname);
                        setLastname(lastname);
                        setDateOfBirth(date);
                        setAddress(address);
                }}/>
            );
            case 1:
            return (
                <ReasonForm 
                    reason={reason}
                    onStateUpdate={(value) => {
                        setReadyForNextStep(true);
                        setReason(value);
                }}/>
            );
            case 2:
            return (
                <SignatureForm
                    date={new Date()}
                    place={place}
                    signature={signature}
                    onStateUpdate={({ready, signature, place, date}) => {
                        setReadyForNextStep(ready);
                        setSignature(signature);
                        setPlace(place);
                        setSignatureDate(date);
                }}
                />
            );
            default:
            return 'Unknown step';
        }
    };
  
    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
        setReadyForNextStep(false);
    };
  
    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
        setReadyForNextStep(false);
    };
  
    const handleReset = () => {
        setActiveStep(0);
    };
    
    return (
        <div className={classes.root}>

            <div className={classes.stepperContainer}>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((label) => {
                    const stepProps = {};
                    const labelProps = {};
                    
                    return (
                    <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                    );
                })}
                </Stepper>
            </div>

            <Grid container spacing={2} direction='column' className={classes.content}>
                <Grid item xs={12}>
                    {activeStep === steps.length ? (
                        <Download params={{firstname, lastname, dateOfBirth, address, signature, reason, place, signatureDate}}/>
                    ) : (
                        <div>
                            {getStepContent(activeStep)}
                            <div className={classes.buttons}>
                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                    Retour
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    disabled={!readyForNextStep}
                                    className={classes.button}>
                                    {activeStep === steps.length - 1 ? 'Terminer' : 'Suivant'}
                                </Button>
                            </div>
                        </div>
                    )}
                </Grid>
            </Grid>

        </div>
    );
  }