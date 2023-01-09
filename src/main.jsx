import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const theme = createTheme({
  typography: {
    fontFamily: `'Raleway', sans-serif`,
  },

  palette: {
    mode: 'dark',
    primary: {
      main: '#ff8c00',
    },
    background: {
      default: '#222222',
      paper: '#111111',
    },
    text: {
      secondary: '#ff8c00',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
