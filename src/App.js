import "./App.css";
import ListOfFlight from "./ListOfFlights";
import AirzenLogo from "./images/airzenLogo.png";

function App() {
  return (
    <div className="App">
      <header className="airzen2"></header>
      <img className="logo" src={AirzenLogo}></img>
      <ListOfFlight />
    </div>
  );
}

export default App;
