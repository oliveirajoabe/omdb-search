export interface RatingsProps {
  Source: string;
  Value: string;
}
export interface DataProps {
  Actors: string;
  Awards: string;
  Country: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Rated: string;
  Ratings: RatingsProps[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
  totalSeasons: string;
  Error?: string;
}

export interface ParamsProps {
  namefilm: string;
}
