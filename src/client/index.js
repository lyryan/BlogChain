import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: { main: '#FFFFFF' }, // Purple and green play nicely together.
      secondary: { main: '#F1F1F1' }, // This is just green.A700 as hex.
    },
});

ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('root'));
