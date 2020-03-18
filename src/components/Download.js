import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import { FormControlLabel, RadioGroup, Radio, CircularProgress, Button, Typography } from '@material-ui/core';
import 'date-fns';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import OutputDocument from './OutputDocument';
import DownloadIcon from '@material-ui/icons/CloudDownload';


const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: '128px',
    },
    instructions: {
      textAlign: 'center',
    },
    downloadLink: {
        textDecoration: 'none',
        margin: '16px',
        display: 'block',
    } 
  }));

export default function Download(props) {
    const classes = useStyles();
   
    return (
      <div className={classes.root}>
        <Typography className={classes.instructions} variant="body1" component="h6">
          Votre attestation est prête !<br/>
          Utilisez le bouton ci-dessous pour la télécharger.
        </Typography>
        <PDFDownloadLink className={classes.downloadLink} document={<OutputDocument params={props.params}/>} fileName="attestation-covide.pdf">
          {({ blob, url, loading, error }) => (loading ? <CircularProgress /> : <Button startIcon={<DownloadIcon />} variant="contained" color="primary">Télécharger</Button>)}
        </PDFDownloadLink>
        <Button onClick={props.onBack}>Recommencer</Button>
      </div>
    );
  }