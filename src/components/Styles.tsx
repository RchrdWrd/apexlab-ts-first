import { createStyles, makeStyles, withStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import { ClassNameMap } from '@mui/styles';
import { red } from '@mui/material/colors';

class Styles {
  static getStyles = makeStyles((theme: Theme) =>
    createStyles({
      AppBackground: {
        backgroundImage: 'url(https://www.teahub.io/photos/full/220-2205714_get-the-latest-movies-data-src-kodi-tv.jpg)',
        filter: 'blur(8px)',
        backgroundPosition: 'center fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
        position: 'absolute',
      },

      AppBase: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 'calc(10px + 2vmin)',
        backgroundColor: 'rgb(0,0,0)',
        zIndex: '2',
      },

      AppPage: {
        zIndex: '3',
      },
      
      SearchBox: {
        backgroundColor: 'rgba(45, 225, 175, 0.7)',
        
        border: 0,
        borderRadius: '15px 15 0 0',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
      }
    }),
  );
}

export default Styles;