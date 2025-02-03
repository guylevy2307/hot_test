class MovieItem {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  Response: string;
  Images: string[];

  constructor(
    Title: string,
    Year: string,
    Rated: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Poster: string,
    Metascore: string,
    imdbRating: string,
    imdbVotes: string,
    imdbID: string,
    Type: string,
    Response: string,
    Images: string[]
  ) {
    this.Title = Title;
    this.Year = Year;
    this.Rated = Rated;
    this.Released = Released;
    this.Runtime = Runtime;
    this.Genre = Genre;
    this.Director = Director;
    this.Writer = Writer;
    this.Actors = Actors;
    this.Plot = Plot;
    this.Language = Language;
    this.Country = Country;
    this.Awards = Awards;
    this.Poster = Poster;
    this.Metascore = Metascore;
    this.imdbRating = imdbRating;
    this.imdbVotes = imdbVotes;
    this.imdbID = imdbID;
    this.Type = Type;
    this.Response = Response;
    this.Images = Images;
  }
}
