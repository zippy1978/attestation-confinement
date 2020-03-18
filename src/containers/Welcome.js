import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import { FormControlLabel, RadioGroup, Radio, Typography, Button } from '@material-ui/core';
import 'date-fns';
import logo from '../resources/logo.png';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'calc(100% - 32px)',
        padding: '16px',
    },
    logo: {
        width: '200px',
        margin: '40px',
    },
    title: {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
    },
    text: {
        textAlign: 'center',
        margin: '20px',
    }
  }));

export default function Welcome(props) {
    const classes = useStyles();

    return (
      <div className={classes.root}>
          
          <img src={logo} className={classes.logo}/>
          <Typography variant="h5" component="h5" className={classes.title}>#RESTEZCHEZVOUS !</Typography>
          <Typography className={classes.text} variant="body1" component="h6">Si vous devez impérativement sortir, vous pouvez utiliser cette application pour générer une attestation de sortie numérique.</Typography>
          <Button variant="contained" color="primary" onClick={() => {props.onAccepted()}}>J'ai compris</Button>
      </div>
    );
  }