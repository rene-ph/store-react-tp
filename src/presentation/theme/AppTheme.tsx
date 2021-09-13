import { FC } from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createTheme({
    palette: {
      primary: {
        main: '#000',
      },
      secondary: {
        main: '#fff',
      }, 
    },
});

const AppTheme: FC = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
            {children}
        </ThemeProvider>
      );
}

export default AppTheme;