import React, { useState } from 'react';
//import logo from './logo.svg';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import { purple, green } from '@material-ui/core/colors';
import Main from './containers/Main';
import Welcome from './containers/Welcome';


const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

export default function App() {
  const [conditionsAccepted, setConditionsAccepted] = useState(false);
  
  return (
    <ThemeProvider theme={theme}>
      {conditionsAccepted ? <Main/> : <Welcome onAccepted={() => {setConditionsAccepted(true)}}/>}
    </ThemeProvider>
  );
}

