/*
    *FileName: movieDatabase.tsx
    *Author: John Richard Ward Daily Ward
    *Functions: That's TS file has a function to fetch movie datas from ApexLab's GraphQL Sandbox
*/
export default class MovieDatabase {
  private _response!:string;

  async sendRequest(movieName:string) {
      const fetchProm = await fetch('https://tmdb.sandbox.zoosh.ie/dev/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query SearchMovies {
                searchMovies(query: "` + movieName + `") {
                  name
                  genres {name}
                  score
                  imgBackdrop: backdrop {
                    original
                  }
                  imgPoster: poster {
                    url: custom(size: "w185_and_h278_bestv2")
                  }
                }
              }
              `,
            variables: {
              now: new Date().toISOString(),
            },
          }),
        });
        await (fetchProm.json().then((data) => this._response = data));
        await (console.log(this._response));
  }
  getResponse() {
    return this._response;
  }
}