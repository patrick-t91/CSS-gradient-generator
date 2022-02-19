import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { MainScreen } from "./Containers/MainScreen";
import { GeneratorScreen } from "./Containers/GeneratorScreen";
import { StylesContextProvider } from "./Context/StylesContext";
import { ThemeContextProvider } from "./Context/ThemeContext";
import { GradientManager } from "./Components/StyleManagers/GradientManager";
import { DirectionManager } from "./Components/StyleManagers/DirectionManager";
import { ColorManager } from "./Components/StyleManagers/ColorManager";
import { FormatManager } from "./Components/StyleManagers/FormatManager";
import { CopyStylesButton } from "./Components/StyleManagers/CopyButtons/CopyStylesButton";
import { CopyLinkButton } from "./Components/StyleManagers/CopyButtons/CopyLinkButton";

function App() {
  return (
    <div className="App">
      <Router>
        <StylesContextProvider>
          <ThemeContextProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <GeneratorScreen>
                      <Header />
                      <GradientManager />
                      <DirectionManager />
                      <ColorManager />
                      <FormatManager />
                      <CopyStylesButton />
                      <CopyLinkButton />
                    </GeneratorScreen>
                    <MainScreen />
                  </>
                }
              ></Route>
            </Routes>
          </ThemeContextProvider>
        </StylesContextProvider>
      </Router>
    </div>
  );
}

export default App;
