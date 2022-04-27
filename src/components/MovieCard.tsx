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

interface Props {
  movieName: string,
  movieScore: number,
  movieGenres: jsonSchema.Genre[],
  movieImgPoster: string,
  clickAction: React.MouseEventHandler<HTMLDivElement>
}

const cardStyle = createStyles({
  MovieCard: {
    transition: '0.4s',
    whiteSpace: 'normal',
    '&:hover': {
      boxShadow: '0px 0px 10px 4px #2de1af',
    }
  },
});

interface Props extends WithStyles<typeof cardStyle> {};

class MovieCard extends React.Component<Props> {

  render() {
    return (
      <Grid item onClick={this.props.clickAction} className={this.props.classes.MovieCard} xs={12} sx={{borderRadius: '15px', background: 'url(' + this.props.movieImgPoster + ')', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
        <Card sx={{ width: '250px',  background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 60%)', borderRadius: '15px' }}>
          <CardContent sx={{minHeight: '150px', color: '#2de1af'}}>
            <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center'}}>
              {this.props.movieName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            </Typography>
          </CardContent>
          <CardActions>
            <Typography variant="body2" color="#2de1af">
            <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignContent: 'flex-start',
                  bgcolor: 'transparent',
                  borderRadius: 1,
                  color: '#2de1af',
                  minHeight: '60px'
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
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(cardStyle)(MovieCard);