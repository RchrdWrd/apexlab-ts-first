import * as React from 'react';
import {IconButton, InputBase, Paper, CircularProgress} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  className: string,
  placeholder: string
  loading: boolean,
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  searchClick: React.MouseEventHandler<HTMLButtonElement>
}

class SearchBox extends React.Component<Props> {
  render() {
    return (
      <Paper
        component="form"
        className={this.props.className}
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
          
          autoComplete='off'
          value={this.props.value}
          type='text'
          onChange={this.props.onChange}
        /> 
      </Paper>
    );
  }
}

export default SearchBox;