import { Link, useParams } from "react-router-dom";
import { api } from "../../service/api";

import * as S from "./styles";

import arrowLef from "../../assets/icons/arrow-left.svg";
import imdb from "../../assets/icons/imdb.svg";
import rating from "../../assets/icons/rating.svg";
import { useLayoutEffect, useState } from "react";
import { DataProps, ParamsProps } from "./interfaces";
import FavoriteIcon from "../../assets/icons/FavoriteIcon";
import Loader from "../../components/Loader";

export default function Film() {
  const [data, setData] = useState<DataProps>();
  const [loading, setLoading] = useState(false);

  const params = useParams<ParamsProps>();

  function getFilme() {
    api
      .get(`?i=${params.namefilm}`)
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }

  useLayoutEffect(() => {
    setLoading(true);
    getFilme();
  }, []);

  if (loading) {
    return (
      <S.ContainerStyle>
        <Loader />
      </S.ContainerStyle>
    );
  }

  return (
    <S.Container>
      <S.WrapperContentFilm>
        <S.Header>
          <Link to="/">
            <img src={arrowLef} alt="" />
          </Link>
        </S.Header>
        {data?.Response !== "False" ? (
          <>
            <S.MovieDetails>
              <span>{data?.Runtime}</span>
              <span>{data?.Year}</span>
              <div className="rated">
                <span>{data?.Rated}</span>
              </div>
            </S.MovieDetails>
            <S.Content>
              <S.InfoDetailsFilm>
                <h1>{data?.Title}</h1>
                <div className="evaluation">
                  <div className="imdb">
                    <img src={imdb} alt="" />
                    <span>
                      {data?.Ratings.length && data?.Ratings[0].Value}
                    </span>
                  </div>
                  <div className="rating">
                    <img src={rating} alt="" />
                    <span>{data?.imdbRating}%</span>
                  </div>
                  <div className="favorite">
                    <FavoriteIcon color="#7B8C98" />
                    <span>Add to your favorites</span>
                  </div>
                </div>
                <div className="plot">
                  <h3>Plot</h3>
                  <p>{data?.Plot}</p>
                </div>
                <div className="columns">
                  <div className="cast">
                    <h3>Cast</h3>
                    {data?.Actors.split(",").map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                  <div className="genre">
                    <h3>Genre</h3>
                    {data?.Genre.split(",").map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                  <div className="director">
                    <h3>Director</h3>
                    {data?.Director.split(",").map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </div>
              </S.InfoDetailsFilm>
              <S.WrapperImage>
                <img src={data?.Poster} alt="" />
              </S.WrapperImage>
            </S.Content>
          </>
        ) : (
          <div>{<h3>{data?.Error}</h3>}</div>
        )}
      </S.WrapperContentFilm>
    </S.Container>
  );
}
