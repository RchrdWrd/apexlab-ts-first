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
    if(searchValue === null || searchValue.match(/^ *$/) !== null)
      alert('u must enter a movie name');
    else {
      await setLoading(true);
      await md.sendRequest(searchValue);
      await (setOptions(JSON.parse(JSON.stringify(md.getResponse()).replace(/\:null/gi, "\:\"\"")).data.searchMovies));
      await setLoading(false);
    }
  }

  async function getSummary(name:string) {
    await wapi.sendRequest(name);
    return await wapi.getResponse();
  }


  return (
    <Box className={AppStyle.AppBackground}>
      <Box className={AppStyle.App}>
      <Box className={AppStyle.Fullsize} id="movieList">
      <Box className={AppStyle.AppBase}>
        <Box className={AppStyle.AppPage}>
          <SearchBox 
            loading={loading}
            ref={textInput}
            value={searchValue}
            placeholder="Enter movie title.."
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            searchClick={(e) => {
              searchMovies();
            }}
            onEnter={(e) => {
              if (e.key === 'Enter')
              {
                e.preventDefault();
                searchMovies();
              }
            }}
          ></SearchBox>
          </Box>
        <Box
          zIndex="6"
          maxWidth="75vw"
          marginTop="20px"
          paddingTop="20px"
          overflow="auto"
          maxHeight="80vh"
        >
          <Grid
            flexGrow={1} container spacing={2}>
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
              movieImgBackdrop={movieData.imgBackdrop}
              movieSummary={movieData.summary}
              openTMDB={()=> {window.open(`https://en.wikipedia.org/wiki/${movieData.name}`, "_blank")}}
              openWIKI={()=> {}}
            ></MovieDataBox>
        </Box>
        
      </Box>
      </Box>
    </Box>
  );
}

export default App;
