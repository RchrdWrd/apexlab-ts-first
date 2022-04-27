import React from 'react';
import Box from '@mui/material/Box';
import Styles from './components/Styles'
import { ClassNameMap } from '@mui/styles';
import MovieCard from './components/MovieCard';
import SearchBox from './components/SearchBox';
import MovieDatabase from './lib/MovieDatabase';
import jsonSchema, { SearchMovy } from 'jsonSchema';
import Grid from '@mui/material/Grid';
import WikipediaAPI from './lib/WikipediaAPI/WikipediaAPI';
import Button from '@mui/material/Button';
import ScrollIntoView from 'react-scroll-into-view';
import MovieDataBox from './components/MovieDataBox';

interface ImovieData {
  name: string,
  score: number,
  genres: jsonSchema.Genre[],
  imgBackdrop: string,
  imgPoster: string,
  summary: string
}

function App() {
  const AppStyle:ClassNameMap = Styles.getStyles();
  const textInput:React.RefObject<SearchBox> = React.createRef();

  const [searchValue, setSearchValue] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const [movieCardState, setMovieCardState] = React.useState(false);
  const [movieData, setMovieData] = React.useState<ImovieData>({name: '', score: 0, genres: [], imgPoster: '', imgBackdrop: '', summary: ''});
  
  const md = new MovieDatabase();
  const wapi = new WikipediaAPI();

  var [options, setOptions] = React.useState<jsonSchema.SearchMovy[]>([]);

  async function searchMovies() {
    await setLoading(true);
    await md.sendRequest(searchValue);
    await (setOptions(JSON.parse(JSON.stringify(md.getResponse()).replace(/\:null/gi, "\:\"\"")).data.searchMovies));
    await setLoading(false);
  }

  async function getSummary(name:string) {
    await wapi.sendRequest(name);
    return await wapi.getResponse();
  }

  /*async function setMovieData(_name:string, _score:number, _genres:jsonSchema.Genre[], _imgPoster:string, _imgBackdrop:string) {
    movieBoxData.name = _name;
    movieBoxData.score = _score;
    movieBoxData.genres = _genres;
    movieBoxData.imgPoster = _imgPoster;
    movieBoxData.imgBackdrop = _imgBackdrop;
    movieBoxData.summary = (await getSummary(_name)).toString();
  }*/

  return (
    <Box className={AppStyle.AppBackground}>
      <Box className={AppStyle.App}>
      <Box className={AppStyle.Fullsize} id="movieList">
      <Box className={AppStyle.AppBase}>
        <Box className={AppStyle.AppPage}>
          <SearchBox 
            className={AppStyle.SearchBox} 
            loading={loading}
            ref={textInput}
            value={searchValue}
            placeholder="Enter movie title.."
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            searchClick={(e) => {
              if(searchValue === null || searchValue.match(/^ *$/) !== null)
                alert('u must enter a movie name');
              else
                searchMovies();
            }}

          ></SearchBox>
          </Box>
        <Box sx={{zIndex: 6, maxWidth: '75vw', marginTop: '20px', paddingTop: '20px', overflow: 'auto', maxHeight: '80vh'}}>
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={2}>
                {options.map(data => (
                  <Grid  item>
                    <ScrollIntoView selector="#movieData">
                      <MovieCard
                        movieName={data.name}
                        movieScore={data.score}
                        movieGenres={data.genres}
                        movieImgPoster={data.imgPoster.url}
                        clickAction={() => {
                          var _summary!:string;
                          getSummary(data.name).then(summary => {
                            setMovieData({name: data.name, score: data.score, genres: data.genres, imgPoster: data.imgPoster.url, imgBackdrop: data.imgBackdrop.original, summary: summary});
                          });
                          
                        }}
                      ></MovieCard>
                    </ScrollIntoView>
                  </Grid>
                ))}    
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
      </Box>
      <Box id="movieData" className={AppStyle.Fullsize} sx={{overflow: 'auto'}}>
        <Box className={AppStyle.MovieData}>
          <MovieDataBox
              movieName={movieData.name}
              movieScore={movieData.score}
              movieGenres={movieData.genres}
              movieImgPoster={movieData.imgPoster}
              movieImgBackdrop={movieData.imgBackdrop}
              movieSummary={movieData.summary}
            ></MovieDataBox>
        </Box>
        
      </Box>
      </Box>
    </Box>
  );
}

export default App;
