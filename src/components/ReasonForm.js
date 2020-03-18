import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import { FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import 'date-fns';


const useStyles = makeStyles(() => ({
    root: {
        
    },
    choice: {
        paddingBottom: '16px',
    } 
  }));

export default function ReasonForm(props) {
    const classes = useStyles();
    const [value, setValue] = useState(props.reason);
    
    useEffect(() => {
        updateState();
    });

    const handleChange = event => {
        setValue(event.target.value);
    };

    const updateState = () => {
        if (props.onStateUpdate) {
            props.onStateUpdate(value);
        }
    }

    return (
      <div>
        <RadioGroup value={value} onChange={handleChange} aria-label="gender" name="customized-radios">
            <FormControlLabel value="#1" className={classes.choice} control={<Radio color="primary" />} label="Déplacements entre le domicile et le lieu d'exercice de l'activité professionnelle, lorsqu'ils sont indispensables à l'exercice d'activités ne pouvant être organisées sous forme de télétravail (sur justificatif permanent) ou déplacements professionnels ne pouvant être différés" />
            <FormControlLabel value="#2" className={classes.choice} control={<Radio color="primary" />} label="Déplacements pour effectuer des achats de première nécessité dans des établissements autorisés (liste sur gouvernement.fr)" />
            <FormControlLabel value="#3" className={classes.choice} control={<Radio color="primary" />} label="Déplacements pour motif de santé" />
            <FormControlLabel value="#4" className={classes.choice} control={<Radio color="primary" />} label="Déplacements pour motif familial impérieux, pour l'assistance aux personnes vulnérables ou la garde d'enfants" />
            <FormControlLabel value="#5" className={classes.choice} control={<Radio color="primary" />} label="Déplacements brefs, à proximité du domicile, liés à l'activité physique individuelle des personnes, à l'exclusion de toute pratique sportive collective, et aux besoins des animaux de compagnie" />
        </RadioGroup>
      </div>
    );
  }