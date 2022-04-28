import React from "react";
import { Box, Divider, Rating, Typography } from "@mui/material";
import { createStyles, withStyles, WithStyles } from "@mui/styles";
import jsonSchema from "jsonSchema";

interface Props {
  movieName: string;
  movieScore: number;
  movieGenres: jsonSchema.Genre[];
  movieImgPoster: string;
  clickAction: React.MouseEventHandler<HTMLDivElement>;
}

const cardStyle = createStyles({
  MovieCard: {
    transition: "0.4s",
    whiteSpace: "normal",
    "&:hover": {
      boxShadow: "0px 0px 10px 4px #2de1af",
    },
  },
});

interface Props extends WithStyles<typeof cardStyle> {}

class MovieCard extends React.Component<Props> {
  render() {
    return (
      <Box
        borderRadius="15px"
        onClick={this.props.clickAction}
        className={this.props.classes.MovieCard}
        sx={{
          background: `url(${this.props.movieImgPoster})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box
          width="250px"
          borderRadius="15px"
          padding={1}
          sx={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.7) 70%, rgba(85,94,174, 0.9) 100%)",
          }}
        >
          <Box minHeight="150px" color="#2de1af">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textAlign: "center" }}
            >
              {this.props.movieName}
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="#2de1af">
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignContent: "flex-start",
                  bgcolor: "transparent",
                  borderRadius: 1,
                  color: "#2de1af",
                  minHeight: "60px",
                }}
              >
                {this.props.movieGenres.map((genre) => (
                  <Box border="1px solid" p="3px" m="2px" borderRadius="15px">
                    {genre.name}
                  </Box>
                ))}
              </Box>
              <Divider
                sx={{
                  height: "1px",
                  m: 0.5,
                  background:
                    "linear-gradient(90deg, rgba(45,225,175,0.0) 0%, rgba(45,225,175,0.7) 35%, rgba(45,225,175,0.7) 65%, rgba(45,225,175,0.0) 100%)",
                }}
                orientation="horizontal"
              />
              rating:
              <Rating
                name="read-only"
                value={this.props.movieScore}
                max={10}
                readOnly
              />
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withStyles(cardStyle)(MovieCard);
