import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import jsonSchema from 'jsonSchema';
import {ClassNameMap, createStyles, makeStyles, WithStyles, withStyles} from '@mui/styles';
import { Theme } from '@mui/material/styles';
import ScrollIntoView from 'react-scroll-into-view';

interface Props {
  movieName: string,
  movieScore: number,
  movieGenres: jsonSchema.Genre[],
  movieImgBackdrop: string,
  movieSummary: string,
  openTMDB: React.MouseEventHandler<HTMLButtonElement>,
  openWIKI: React.MouseEventHandler<HTMLButtonElement>
}

const boxStyle = createStyles({
  MovieDataBox: {
    transition: '0.4s',
    whiteSpace: 'normal',
    '&:hover': {
      boxShadow: '0px 0px 10px 4px #2de1af',
    }
  },
});

interface Props extends WithStyles<typeof boxStyle> {};

class MovieDataBox extends React.Component<Props> {

  render() {
    return (
      <Box 
        className={this.props.classes.MovieDataBox}
        display="flex" 
        justifyContent="center"
        flexWrap="wrap"
        width="100%" height="100vh"
        sx={{
          backgroundImage: `url(${this.props.movieImgBackdrop})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover' }}
        >
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          width="100%" height="100%"
        >
          <Box 
            width="100%"
            maxWidth="450px"
            height="100%"
            position="relative"
            sx={{background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 70%, rgba(85,94,174, 0.9) 100%)', backdropFilter: 'blur(5px)'}}
          >
            <ScrollIntoView selector="#movieList">
              <Button variant="contained" sx={{backgroundColor: '#2de1af', color: 'rgb(30,30,30)'}}>Back to the search</Button>
            </ScrollIntoView>
            <Box
              color="#2de1af"
              p={4}
              paddingBottom={1}
            >
              <Typography gutterBottom variant="h4" component="div" textAlign="center">
                {this.props.movieName}
              </Typography>
            </Box>
            <Box
              color="#2de1af"
              p={4}
            >
              <Typography variant="body1" color="#2de1af" overflow="scroll" maxHeight="30vh">
                {this.props.movieSummary}
              </Typography>
              <Box
                whiteSpace= "nowrap"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Button onClick={this.props.openTMDB} variant="contained" sx={{backgroundColor: '#2de1af', color: 'rgb(30,30,30)'}}>TMDB</Button>
                <Button onClick={this.props.openWIKI} variant="contained" sx={{backgroundColor: '#2de1af', color: 'rgb(30,30,30)'}}>WIKI</Button>
              </Box>
            </Box>
            <Box
              position="absolute"
              bottom={80}
              left={0}
              right={0}
              maxWidth={'450px'}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="body2" color="#2de1af">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  >
                    {this.props.movieGenres.map(genre => (
                      <Box
                        border="1px solid"
                        p="3px"
                        m="2px"
                        borderRadius="15px"
                      >
                        {genre.name}
                      </Box>
                    ))} 
                  </Box>
                <Box
                  margin={4}
                  height="1px"
                  sx={{background: 'linear-gradient(90deg, rgba(45,225,175,0.0) 0%, rgba(45,225,175,0.7) 15%, rgba(45,225,175,0.7) 85%, rgba(45,225,175,0.0) 100%)' }}
                  />
                <Rating name="read-only" value={this.props.movieScore} max={10} readOnly />
              </Typography>  
            </Box>
          </Box>

        </Box>
      </Box>
    );
  }
}

export default withStyles(boxStyle)(MovieDataBox);