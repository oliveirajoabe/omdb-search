import { createContext, useState, ReactNode, useContext } from "react";
import { api } from "../../service/api";
import { DataProps, FilmsContextData } from "./interfaces";

const resetValueDate = {
  Response: "",
  Search: [
    {
      Poster: "",
      Title: "",
      Type: "",
      Year: "",
      imdbID: "",
    },
  ],
  totalResults: "",
};

export const FilmsContext = createContext({} as FilmsContextData);

type FilmsContextProviderProps = {
  children: ReactNode;
};

export function FilmsContextProvider({ children }: FilmsContextProviderProps) {
  const [isInputEmpty, setIsInputEmpty] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [valueInput, setValueInput] = useState<string>("");
  const [data, setData] = useState<DataProps>();

  function fetchMoreData(input: string, page?: number | undefined) {
    api
      .get(`?s=${input}&page=${page ? page + 1 : 1}`)
      .then(({ data }) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value) {
      setData(resetValueDate);
      setIsLoading(true);
      fetchMoreData(value);
      setIsInputEmpty(false);
    } else {
      setData(resetValueDate);
      setIsInputEmpty(true);
    }
  };

  const handleChangePage = (page: number) => {
    fetchMoreData(valueInput, page);
  };

  return (
    <FilmsContext.Provider
      value={{
        data,
        isInputEmpty,
        isLoading,
        setValueInput,
        valueInput,
        handleChangeInput,
        handleChangePage,
      }}
    >
      {children}
    </FilmsContext.Provider>
  );
}

export const useFilms = () => {
  return useContext(FilmsContext);
};
