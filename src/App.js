// import logo from "./logo.svg";
import "./App.css";
import ContainerWithCards from "./Charts";
import { Cards } from "./components/HeroCards";
import { TwoCards } from "./components/TwoCards";
// import NewCards from "./components/NewCards";
// import Home from "./page";

function App() {
  return (
    <div className="App">
      <Cards />
      <TwoCards />
      <ContainerWithCards />
      {/* <NewCards /> */}
    </div>
  );
}

export default App;
