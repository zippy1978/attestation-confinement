import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import 'date-fns';
import SignatureCanvas from 'react-signature-canvas';
import { Typography, TextField, Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import frLocale from "date-fns/locale/fr";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    signature: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme.palette.grey[500],
        borderRadius: 10,
        marginBottom: '16px',
    },
    textField: {
        width: '100%',
        paddingBottom: '16px',
    },
    datePicker: {
        width: '100%',
        paddingBottom: '16px',
    },
  }));

export default function SignatureForm(props) {
    const classes = useStyles();
    const [date, setDate] = useState(props.date);
    const [place, setPlace] = useState(props.place);
    const [signature, setSignature] = useState(props.signature);
    const [sigCanvas, setSigCanvas] = useState(null);
    

    useEffect(() => {
        updateState();
    });

    const handleDateChange = date => {
        setDate(date);
    };

    const handlePlaceChange = event => {
        setPlace(event.target.value);
    };

    const updateState = () => {

        if (sigCanvas && sigCanvas.isEmpty()) {
            sigCanvas.fromDataURL(signature, {width: window.innerWidth - 32, height: 200});
        }

        const ready = (date !== '' && place !== '' && sigCanvas && !sigCanvas.isEmpty())
        if (props.onStateUpdate) {
            props.onStateUpdate({ready, signature, place, date});
        }
    }

    return (
      <div className={classes.root}>
        <Typography variant="body1" component="h6">Signature</Typography>
        <SignatureCanvas penColor='black'
            ref={(ref) => { setSigCanvas(ref) }}
            canvasProps={{width: window.innerWidth - 32, height: 200, className: classes.signature}} 
            onEnd={() => {setSignature(sigCanvas.toDataURL('image/png'))}}
        />
        <Button color="primary" onClick={() => {sigCanvas.clear()}}>Effacer</Button>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField required 
                    className={classes.textField} 
                    id="place" 
                    value={place}
                    onChange={handlePlaceChange}
                    label="Fait à"/>
            <MuiPickersUtilsProvider locale={frLocale} utils={DateFnsUtils}>
                <KeyboardDatePicker
                    variant="outlined"
                    className={classes.datePicker}
                    disableToolbar
                    required
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="singatureDate"
                    label="Le (date)"
                    value={date}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'Changer la date',
                    }}/>
            </MuiPickersUtilsProvider>
            
        </form>
      </div>
    );
  }