/*
    *FileName: movieDatabase.tsx
    *Author: John Richard Ward Daily Ward
    *Functions: That's TSX file has a function to fetch movie's summary from Wikipedia.
*/

export default class MovieDatabase {
  private _response!:string;
//https://en.wikipedia.org/api/rest_v1/page/summary/Harry_Potter_and_the_Goblet_of_Fire_(film)
  async sendRequest(movieName:string) {
    const fetchProm = await fetch(
      "https://en.wikipedia.org/api/rest_v1/page/summary/" + movieName + "",
      {
        method: "GET"
      }
    )
      .then(response => response.json())
      .then(json => {
        this._response = json.extract;
      })
      .catch(error => {
        console.log(error.message);
      });

  }
  getResponse() {
    return this._response;
  }
}