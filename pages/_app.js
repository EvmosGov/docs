import '../public/style.css'
import '../public/main.css'
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ee5035'
      }
  },
  typography: {
    fontFamily: [
      'Inter',
      'Montserrat',
      'sans-serif'
    ].join(','),
  }
});

export default function Nextra({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    localStorage.setItem('theme', 'dark')
  }, [theme])

  const getLayout = Component.getLayout || (page => page)
  return getLayout(
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} 
      />
    </ThemeProvider>
)
}
