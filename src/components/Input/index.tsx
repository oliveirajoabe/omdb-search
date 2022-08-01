import * as S from "./styles";

interface Props {
  isSearch?: boolean;
  type?: "password" | "email" | "text";
  placeholder?: string;
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value: string;
}

export default function Input({
  isSearch = false,
  type = "text",
  placeholder,
  handleChange,
  value,
}: Props) {
  return (
    <S.InputStyle
      type={type}
      isSearch={isSearch}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  );
}
