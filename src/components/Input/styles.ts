import styled from "styled-components";
import icon from "../../assets/images/search-icon.svg";

interface InputProps {
  isSearch?: boolean;
}

export const InputStyle = styled.input<InputProps>`
  width: 100%;
  height: 30px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  outline: none;
  border-radius: 5px;

  font-family: ${({ theme }) => theme.fonts["font-family"].roboto};

  ${({ isSearch = false }) =>
    isSearch
      ? `
        padding: 10px 30px;
        background-image: url(${icon});
        background-repeat: no-repeat;
        background-size: 15px;
        background-position-x: 8px;
        background-position-y: 8px;
    `
      : `                
        padding: 10px 10px;
    `};
`;
