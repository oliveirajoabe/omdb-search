import { PacmanLoader } from "react-spinners";
import * as S from "./styles";

interface Props {
  color?: string;
  size?: number;
}

export default function Loader({ color = "#fff", size }: Props) {
  return (
    <S.Container>
      <PacmanLoader color={color} size={size} />
    </S.Container>
  );
}
