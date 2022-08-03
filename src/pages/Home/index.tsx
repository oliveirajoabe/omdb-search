import Input from "../../components/Input";

import NotFilms from "../../assets/images/image.svg";

import * as S from "./styles";
import useDebounce from "../../commons/hooks/useDebounce";
import Cards from "../../components/Cards";
import { Link } from "react-router-dom";
import { useFilms } from "../../commons/hooks/useFilms";
import Loader from "../../components/Loader";
import FileNotFound from "../../assets/icons/FileNotFound";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";

export default function Home() {
  const {
    data,
    isInputEmpty,
    isLoading,
    setValueInput,
    valueInput,
    handleChangeInput,
    handleChangePage,
  } = useFilms();

  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(parseInt(data?.totalResults || "0") / 10));
  }, [handleChangeInput]);

  const debounceChange = useDebounce(handleChangeInput, 800);

  const EmpityContent = () => (
    <S.Content>
      <img src={NotFilms} alt="" />
      <h2>Don't know what to search?</h2>
      <span>Here's an offer you can't refuse</span>
    </S.Content>
  );

  const WrapperCards = () => (
    <>
      <S.WrapperCards id="scrollableDiv">
        {data?.Search.map((item) => (
          <Link to={`/film/${item.imdbID}`} key={item.imdbID}>
            <Cards img={item.Poster} title={item.Title} subtitle={item.Year} />
          </Link>
        ))}
      </S.WrapperCards>
    </>
  );

  const FileNotFoundInImdb = () => (
    <S.WrapperNotFoundMovie>
      <FileNotFound />
      <h1>Nothing Found :'(</h1>
    </S.WrapperNotFoundMovie>
  );

  return (
    <S.Container>
      <S.WrapperContentHome>
        <S.Header>
          <S.InputContent>
            <Input
              type="text"
              placeholder="Search movies..."
              handleChange={(e) => {
                debounceChange(e);
                setValueInput(e.target.value);
              }}
              value={valueInput}
              isSearch
            />
          </S.InputContent>
        </S.Header>
        {isInputEmpty && <EmpityContent />}
        {data?.Response === "True" && (
          <>
            <WrapperCards />
            <S.WrapperPagination>
              <Pagination
                handleChangePage={(e) => handleChangePage(e)}
                pageCount={pageCount}
              />
            </S.WrapperPagination>
          </>
        )}
        {isLoading && <Loader />}
        {data?.Response === "False" && <FileNotFoundInImdb />}
      </S.WrapperContentHome>
    </S.Container>
  );
}
