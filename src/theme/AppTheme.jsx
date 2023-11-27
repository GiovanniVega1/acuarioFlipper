import { CssBaseline } from '@mui/material'
import { ThemeProvider } from 'react-bootstrap';
import { blueTheme } from "./";

export const AppTheme = ( {children} ) => {
  return (
    <ThemeProvider theme={ blueTheme }>
        <CssBaseline />
        {children}
    </ThemeProvider>
  )
}
