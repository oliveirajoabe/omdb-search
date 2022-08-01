import styled from "styled-components";

export const Container = styled.div`
  padding-top: 3.563rem;
  display: flex;
  justify-content: center;
  @media (max-width: 1024px) {
    padding: 3.563rem 1.25rem 0 1.25rem;
  }
`;

export const ContainerStyle = styled(Container)`
  height: 100vh;
`;

export const WrapperContentFilm = styled.div`
  width: 57rem;
`;

export const Header = styled.header`
  margin-bottom: 1.063rem;
`;

export const MovieDetails = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  & > span {
    color: ${({ theme }) => theme.colors["secondary-text-color"]};
    &::after {
      content: "\u2022";
      padding: 0 0.5rem;
    }
  }
  .rated {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 46px;
    height: 22px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors["secondary-text-color"]};
    span {
      color: ${({ theme }) => theme.colors["inverter-text-color"]};
      font-size: 12px;
      font-weight: 700;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  @media (max-width: 1024px) {
    gap: 20px;
  }
  @media (max-width: 768px) {
    gap: 40px;
    flex-direction: column;
  }
`;

export const InfoDetailsFilm = styled.div`
  h1 {
    font-size: 3.75rem;
    margin-bottom: 12px;
    @media (max-width: 1024px) {
      font-size: 2.75rem;
    }
  }
  .evaluation {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 32px;
    .imdb {
      display: flex;
      align-items: center;

      border-radius: 4px;
      height: 32px;
      border: 1px solid ${({ theme }) => theme.colors["border-evaluation"]};

      span {
        font-size: 0.75rem;

        padding: 8px;
      }
    }
    .rating {
      display: flex;
      align-items: center;

      border-radius: 4px;

      height: 32px;
      border: 1px solid ${({ theme }) => theme.colors["border-evaluation"]};

      span {
        font-size: 0.75rem;
        padding: 8px;
      }
    }
    .favorite {
      display: flex;
      align-items: center;
      cursor: pointer;

      border-radius: 4px;
      height: 32px;
      border: 1px solid ${({ theme }) => theme.colors["border-evaluation"]};
      padding: 8px;

      span {
        margin-left: 0.313rem;
        font-size: 0.75rem;
        color: ${({ theme }) => theme.colors["secondary-text-color"]};
      }
    }
    @media (max-width: 425px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .plot {
    margin-bottom: 32px;
    h3 {
      color: ${({ theme }) => theme.colors["secondary-text-color"]};
      font-weight: 500;
      font-size: 1rem;
      margin-bottom: 8px;
      @media (max-width: 1024px) {
        font-size: 0.9rem;
      }
    }
    p {
      color: ${({ theme }) => theme.colors["text-color-primary"]};
      font-weight: 400;
      font-size: 1rem;
      @media (max-width: 1024px) {
        font-size: 0.9rem;
      }
    }
  }
  .columns {
    display: flex;

    h3 {
      color: ${({ theme }) => theme.colors["secondary-text-color"]};
      margin-bottom: 8px;
      font-size: 1rem;
      font-weight: 500;
      @media (max-width: 1024px) {
        font-size: 0.9rem;
      }
    }
    p {
      color: ${({ theme }) => theme.colors["text-color-primary"]};
      @media (max-width: 1024px) {
        font-size: 0.9rem;
      }
    }

    .cast {
      margin-right: 80px;
    }
    .genre {
      margin-right: 149px;
    }

    @media (max-width: 768px) {
      justify-content: space-between;
      .cast {
        margin-right: 0;
      }
      .genre {
        margin-right: 0;
      }
    }
  }
`;

export const WrapperImage = styled.div`
  img {
    width: 360px;
    height: 508px;
    border-radius: 8px;

    @media (max-width: 1024px) {
      width: 300px;
      height: 408px;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
