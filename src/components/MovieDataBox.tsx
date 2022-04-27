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
  movieImgPoster: string,
  movieImgBackdrop: string,
  movieSummary: string,
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
      <Grid item className={this.props.classes.MovieDataBox} xs={12} sx={{width: '100%',  height: '100vh', paddingBottom: '50px', background: 'url(' + this.props.movieImgBackdrop + ')', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
        <Card sx={{ width: '100%',  height: '100%', background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 60%)'}}>
        <ScrollIntoView selector="#movieList">
            <Button variant="contained" sx={{backgroundColor: '#2de1af', color: 'rgb(30,30,30)'}}>Back to the search</Button>
          </ScrollIntoView>
          <CardContent sx={{ color: '#2de1af'}}>
            <Typography gutterBottom variant="h4" component="div" sx={{textAlign: 'center'}}>
              {this.props.movieName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            </Typography>
          </CardContent>
          <CardContent>
          <Typography variant="body1" color="#2de1af" sx={{ overflow: 'scroll', height: '100%'}}>
          {this.props.movieSummary}
            </Typography>
            <Typography variant="body2" color="#2de1af">
            <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignContent: 'center',
                  bgcolor: 'transparent',
                  borderRadius: 1,
                  color: '#2de1af',
                  minHeight: '60px',
                }}
              >
                {this.props.movieGenres.map(genre => (
                    <Box sx={{border: '1px solid', p: '3px', m: '2px', borderRadius:'15px'}}>{genre.name}</Box>
                  ))} 
                  </Box>
              <Divider sx={{ height: '1px', m: 0.5, background: 'linear-gradient(90deg, rgba(45,225,175,0.0) 0%, rgba(45,225,175,0.7) 35%, rgba(45,225,175,0.7) 65%, rgba(45,225,175,0.0) 100%)' }} orientation="horizontal" />
                rating:
              <Rating name="read-only" value={this.props.movieScore} max={10} readOnly />
            </Typography>     
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(boxStyle)(MovieDataBox);