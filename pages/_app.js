import '../public/style.css'
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, createTheme, ColorModeContext } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '../public/main.css'

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
    <ColorModeContext.Provider value={theme}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} 
        />
      </ThemeProvider>
    </ColorModeContext.Provider>
)
}
