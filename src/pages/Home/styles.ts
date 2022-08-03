import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const WrapperContentHome = styled.div`
  width: 57rem;

  @media (max-width: 1024px) {
    width: 90%;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 3.125rem;
`;

export const InputContent = styled.div`
  width: 57rem;
`;

export const Content = styled.div`
  height: calc(100vh - 10vh);

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    margin-top: 24px;
  }
  span {
    margin-top: 8px;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors["secondary-text-color"]};
  }
`;

export const WrapperCards = styled.div`
  margin-top: 30px;
  display: grid;
  gap: 15px;
  justify-content: center;

  @media (min-width: 320px) {
    grid-template-columns: repeat(2, 50%);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 23%);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 15.3%);
  }
`;

export const WrapperNotFoundMovie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 60px;
  }
  svg {
    width: 60%;
  }

  @media (max-width: 768px) {
    svg {
      width: 80%;
    }
    h1 {
      font-size: 35px;
    }
  }
`;

export const WrapperPagination = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 5rem;
  @media (max-width: 425px) {
    ul {
      li {
        width: 30px;
        font-size: 1rem;
      }
    }
  }
`;
