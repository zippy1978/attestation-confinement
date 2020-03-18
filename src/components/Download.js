import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import { FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import 'date-fns';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import OutputDocument from './OutputDocument';


const useStyles = makeStyles(() => ({
    root: {
        
    },
    choice: {
        paddingBottom: '16px',
    } 
  }));

export default function Download(props) {
    const classes = useStyles();
   
    return (
      <div>
        {/* <PDFViewer>
            <OutputDocument />
        </PDFViewer> */}
        <PDFDownloadLink document={<OutputDocument params={props.params}/>} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
      </div>
    );
  }