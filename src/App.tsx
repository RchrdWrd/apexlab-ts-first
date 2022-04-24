import React from 'react';
import Box from '@mui/material/Box';
import Styles from './components/Styles'
import { ClassNameMap } from '@mui/styles';
import SearchBox from './components/SearchBox';

function App() {
  const AppStyle:ClassNameMap = Styles.getStyles();
  const textInput:React.RefObject<SearchBox> = React.createRef();
  const [value, setValue] = React.useState("");
  return (
    <Box>
      <Box className={AppStyle.AppBackground}></Box>
      <Box className={AppStyle.AppBase}>
        <Box className={AppStyle.AppPage}>
          <SearchBox 
            className={AppStyle.SearchBox} 
            loading={true}
            ref={textInput}
            value={value}
            placeholder="Enter movie title.."
            onChange={(e) => {
              setValue(e.target.value);
            }}
            searchClick={(e) => {
              alert('asd');
            }}

          ></SearchBox>
        </Box>
      </Box>
    </Box>

  );
}

export default App;