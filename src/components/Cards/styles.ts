import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 198px;
  border-radius: 8px;

  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  position: relative;

  .card__info-hover {
    border-radius: 8px;

    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors["hover-color"]};
    opacity: 0;
    top: 0;
    padding: 0 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .card__icon {
      padding-top: 10px;
      text-align: right;
    }

    .card__content-titles {
      padding: 7px 0;
      h3 {
        color: ${({ theme }) => theme.colors["text-color-primary"]};
        font-size: 0.75rem;
        line-height: 14.06px;
      }
      span {
        color: ${({ theme }) => theme.colors["secondary-text-color"]};
        font-size: 0.75rem;
        line-height: 14.06px;
      }
    }
  }
  .card__front {
    img {
      width: 100%;
      height: 198px;
      border-radius: 8px;
    }
  }

  &:hover {
    transform: scale(1.1, 1.1);
    .card__info-hover {
      opacity: 0.9;
    }
  }
`;
