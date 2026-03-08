import { ThemeProvider } from "react-bootstrap";
import Intro from "./pages/Intro.tsx";

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Intro />
    </ThemeProvider>
  );
}

export default App;
