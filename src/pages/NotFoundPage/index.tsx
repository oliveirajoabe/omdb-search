import * as S from "./styles";
import NotFound from "../../assets/icons/NotFound";

export default function NotFoundPage() {
  return (
    <S.Container>
      <S.WrapperNotFound>
        <NotFound />
      </S.WrapperNotFound>
    </S.Container>
  );
}
