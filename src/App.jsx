import "./App.scss";

import WeatherBox from "./components/WeatherBox/WeatherBox";
import ContextProvider from "./components/store/contextProvider";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <WeatherBox />
      </ContextProvider>
    </div>
  );
}

export default App;
