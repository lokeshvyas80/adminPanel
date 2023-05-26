import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
  typography: {
      allVariants: {
        //   fontFamily: 'VariableFont_slnt',
          textTransform: 'none',
      },
      h1:{
          fontSize:'36px',
          fontWeight:'700',
          lineHeight: '137.5%',
      },
      h3:{
          fontSize:'24px',
          fontWeight:'600',
          lineHeight: "137.5%",
          color:"#111827"
      },
      h4:{
          fontSize:'18px',
          fontWeight:'600',
          lineHeight: "137.5%",
          color:"#111827"
      },
      h5:{
          fontSize:'16px',
          fontWeight:'400',
          lineHeight: "150%",
          color:"#111827"
      },
      h6:{
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: "157%",
          color:"#111827",
      },
      p:{
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: "157%",
          color:"#111827",
      },
      b:{
          fontSize: '14px',
          fontWeight:'bold'
      },
      caption:{
          fontSize:'13px',
      },

  },

  palette: {
      success: {
          main: '#2AA587',
      },
      secondary: {
          main: '#2AA587',
      },
      primary: {
          main: '#2b4741',
      },
      grey:{
          main:'#6B7280'
      },

  },


});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
    </>
);


reportWebVitals();
