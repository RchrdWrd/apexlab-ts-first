import * as React from 'react';
import {IconButton, InputBase, Paper, CircularProgress} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  className: string,
  placeholder: string
  loading: boolean,
  ref: React.RefObject<React.Component>,
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
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search"
          onClick={this.props.searchClick}
        >
          <SearchIcon />
        </IconButton>
        {this.props.loading ? <CircularProgress color="inherit" size={20} /> : null}
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={this.props.placeholder}
          name='password'
          autoComplete='off'
          ref={this.props.ref}
          value={this.props.value}
          type='text'
          onChange={this.props.onChange}
        /> 
      </Paper>
    );
  }
}

export default SearchBox;