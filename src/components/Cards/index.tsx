import * as S from "./styles";
import defaultImg from "../../assets/images/default.jpg";
import FavoriteIcon from "../../assets/icons/FavoriteIcon";

interface Props {
  title: string;
  subtitle: string;
  img: string;
}

export default function Cards({ img, subtitle, title }: Props) {
  return (
    <S.Container>
      <div className="card__info-hover">
        <div className="card__icon">
          <FavoriteIcon />
        </div>
        <div className="card__content-titles">
          <h3>{title}</h3>
          <span>{subtitle}</span>
        </div>
      </div>
      <div className="card__front">
        <img src={img === "N/A" ? defaultImg : img} alt="" />
      </div>
    </S.Container>
  );
}
