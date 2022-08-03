import { GlobalStyled } from "./commons/styles/global";
import { theme } from "./commons/styles/theme";
import { ThemeProvider } from "styled-components";
import Routes from "./routes";
import { FilmsContextProvider } from "./commons/hooks/useFilms";
import "./commons/styles/import.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FilmsContextProvider>
        <Routes />
      </FilmsContextProvider>
      <GlobalStyled />
    </ThemeProvider>
  );
}

export default App;
