import { createStyles, makeStyles, withStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import { ClassNameMap } from '@mui/styles';
import { red } from '@mui/material/colors';


class Styles {
  static getStyles = makeStyles((theme: Theme) =>
    createStyles({
      '@global': {
        '*::-webkit-scrollbar': {
          width: '0.4em',
        },

        '*::-webkit-scrollbar-track': {
          backgroundColor: 'transparent'
        },

        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#2de1af',
          borderRadius: '8px'
        }
      },

      AppBackground: {
        backgroundImage: 'url(https://www.teahub.io/photos/full/220-2205714_get-the-latest-movies-data-src-kodi-tv.jpg)',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        margin: '0',
        padding: '0',
        whiteSpace: 'nowrap',
        fontSize: '0',
        position: 'fixed',
        overflow: 'hidden',
      },

      App: {
        backdropFilter: 'blur(10px)',
        width: '100%',
        overflow: 'hidden',
      },

      Fullsize: {
        width: '100%',
        height: '100%',
        display: 'inline-block',
        verticalAlign: 'top',
        fontSize: 'initial',
        overflow: 'hidden',
      },

      AppBase: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 'calc(10px + 2vmin)',
        zIndex: '2',
        overflow: 'hidden',
      },

      AppPage: {
        zIndex: '3',
        maxWidth: '90vw',
        marginTop: '20px'
      },

      MovieData: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white'
      },
      
      SearchBox: {
        background: 'rgba(45, 225, 175, 0.7) !important',
        border: 0,
        borderRadius: '15px 15 0 0',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        p: '2px 4px', 
        display: 'flex', 
        alignItems: 'center', 
        maxWidth: 400,
        width: '100%'
      },
    }),
  );
}

export default Styles;