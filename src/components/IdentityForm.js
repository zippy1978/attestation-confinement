import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import frLocale from "date-fns/locale/fr";


const useStyles = makeStyles(() => ({
    root: {
        
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

export default function IdentityForm(props) {
    const classes = useStyles();
    const [date, setDate] = useState(props.date);
    const [firstname, setFirstname] = useState(props.firstname);
    const [lastname, setLastname] = useState(props.lastname);
    const [address, setAddress] = useState(props.address);

    useEffect(() => {
        updateState();
    });
  
    const handleDateChange = date => {
        setDate(date);
    };

    const handleFirstnameChange = event => {
        setFirstname(event.target.value);
    };

    const handleLastnameChange = event => {
        setLastname(event.target.value);
    };

    const handleAddressChange = event => {
        setAddress(event.target.value);
    };

    const updateState = () => {
        const ready = (firstname !== '' && lastname !== '' && date !== '' && address !== '');
        if (props.onStateUpdate) {
            props.onStateUpdate({ready, firstname, lastname, date, address});
        }
    }

    return (
      <div>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField required 
                className={classes.textField} 
                id="firstname" 
                label="Prénom" 
                onChange={handleFirstnameChange}
                value={firstname}/>
            <TextField required 
                className={classes.textField} 
                id="lastname" 
                label="Nom" 
                onChange={handleLastnameChange}
                value={lastname}/>
            <MuiPickersUtilsProvider locale={frLocale} utils={DateFnsUtils}>
                <KeyboardDatePicker
                    variant="outlined"
                    className={classes.datePicker}
                    disableToolbar
                    required
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="dateOfBirth"
                    label="Date de naissance"
                    value={date}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'Changer la date',
                    }}/>
            </MuiPickersUtilsProvider>
            <TextField required 
                className={classes.textField} 
                id="address" 
                multiline 
                value={address}
                rows={4} 
                onChange={handleAddressChange}
                label="Adresse"/>
            
        </form>
      </div>
    );
  }