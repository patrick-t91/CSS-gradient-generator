import "./App.scss";
import { Header } from "./Components/Header";
import { MainScreen } from "./Containers/MainScreen";
import { GeneratorScreen } from "./Containers/GeneratorScreen";
import { StylesContextProvider } from "./Context/StylesContext";
import { ThemeContextProvider } from "./Context/ThemeContext";
import { GradientManager } from "./Components/StyleManagers/GradientManager";
import { DirectionManager } from "./Components/StyleManagers/DirectionManager";
import { ColorManager } from "./Components/StyleManagers/ColorManager";
import { FormatManager } from "./Components/StyleManagers/FormatManager";
import {CopyStylesButton} from './Components/StyleManagers/CopyButtons/CopyStylesButton'

function App() {
  return (
    <div className="App">
      <StylesContextProvider>
        <ThemeContextProvider>
          <GeneratorScreen>
            <Header />
            <GradientManager />
            <DirectionManager />
            <ColorManager />
            <FormatManager />
            <CopyStylesButton />
          </GeneratorScreen>
        </ThemeContextProvider>
        <MainScreen />
      </StylesContextProvider>
    </div>
  );
}

export default App;
