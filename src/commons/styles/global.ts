import { createGlobalStyle, css } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
    }
    body {
        background: ${({ theme }) => theme.colors["bg-color"]};
        -webkit-font-smoothing: antialiased;
    }
    h1, h2, h3, h4, h5, h6, p, span {
        color: ${({ theme }) => theme.colors["text-color-primary"]};
        font-family: ${({ theme }) => theme.fonts["font-family"].roboto}
    };
    `;
