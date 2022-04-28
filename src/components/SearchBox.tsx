import * as React from 'react';
import {IconButton, InputBase, Box, CircularProgress} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  placeholder: string
  loading: boolean,
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  searchClick: React.MouseEventHandler<HTMLButtonElement>,
  onEnter: React.KeyboardEventHandler<HTMLInputElement>
}


class SearchBox extends React.Component<Props> {
  render() {
    return (
      <Box
        width="100%"
        maxWidth="400px"
        alignItems="center"
        p="2px 4px"
        display="flex"
        bgcolor="rgba(45, 225, 175, 0.7) !important"
        borderRadius={15}
        boxShadow="0 3px 5px 2px rgba(255, 105, 135, .3)"
        component="form"
      >
        <IconButton sx={{ p: '10px' }} aria-label="search"
          onClick={this.props.searchClick}
        >
          <SearchIcon />
        </IconButton>
        {this.props.loading ? <CircularProgress color="inherit" size={20} /> : null}
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={this.props.placeholder}
          onSubmit={e => { e.preventDefault(); }}
          onKeyDown={this.props.onEnter}
          onChange={this.props.onChange}
        /> 
      </Box>
    );
  }
}

export default SearchBox;