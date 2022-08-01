export interface SearchProps {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface DataProps {
  Response: string;
  Search: SearchProps[];
  totalResults: string;
}

export interface FilmsContextData {
  data: DataProps | undefined;
  isInputEmpty: boolean;
  isLoading: boolean;
  setValueInput: Function;
  valueInput: string;
  handleChange: Function;
}
