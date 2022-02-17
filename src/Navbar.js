import AirzenLogo from "./images/airzenLogo.png";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={AirzenLogo}></img>
    </div>
  );
};
