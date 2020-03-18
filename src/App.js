import React from 'react';
//import logo from './logo.svg';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import { purple, green } from '@material-ui/core/colors';
import Main from './containers/Main';


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
  
  return (
    <ThemeProvider theme={theme}>
      <Main/>
    </ThemeProvider>
  );
}

