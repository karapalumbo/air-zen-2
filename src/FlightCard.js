import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import FlightDetailsModal from "./FlightDetailsModal";
import AirplaneIcon from "./images/airplaneIcon.svg";

import "./FlightCard.css";

const FlightCard = ({
  arrivalIata,
  departureIata,
  arrivalTime,
  departureTime,
  status,
  name,
  number,
  arrivalTerminal,
  departureTerminal,
  arrivalGate,
  departureGate,
  arrivalDelay,
  departureDelay,
}) => {
  const [showFlightDetails, setShowFlightDetails] = useState(false);

  const handleShowFlightDetails = () => {
    setShowFlightDetails(!showFlightDetails);
  };

  const todaysDate = new Date();

  const formatTime = (dateString) => {
    const localDate = new Date(dateString);
    return localDate.toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flight-card-container">
      <div className="flight-card-details">
        <div className="flight-date-and-status-container">
          <div>{todaysDate.toDateString().split(" ").slice(1).join(" ")}</div>
          <div className="status"> {status.toUpperCase()}</div>
        </div>
        <div className="flight-to-and-from-container">
          <div>
            <p className="to-from">From</p>
            <h2 className="to-from-iata"> {departureIata}</h2>
          </div>
          <div className="img-container">
            <img className="airplane-icon-img" src={AirplaneIcon}></img>
          </div>
          <div>
            <p className="to-from">To</p>
            <h2 className="to-from-iata">{arrivalIata}</h2>
          </div>
        </div>
        <div className="flight-departure-and-arrival-container">
          <div>
            <p className="departure-arrival">Departure</p>
            <p className="departure-arrival-time">
              {formatTime(departureTime)}
            </p>
          </div>
          <div>
            <p className="departure-arrival">Arrival</p>
            <p className="departure-arrival-time">{formatTime(arrivalTime)}</p>
          </div>
        </div>

        <div className="flight-name-and-number-container">
          <div className="flight-name-and-number">
            {name} {number}
          </div>
          <button
            className="flight-details-btn"
            onClick={handleShowFlightDetails}
          >
            <FontAwesomeIcon
              size="2x"
              icon={showFlightDetails ? faAngleUp : faAngleDown}
            />
          </button>
        </div>
        {showFlightDetails && (
          <>
            <FlightDetailsModal
              travelTime={"Departure"}
              airport={departureIata}
              terminal={departureTerminal}
              gate={departureGate}
              delay={departureDelay}
            />
            <FlightDetailsModal
              travelTime={"Arrival"}
              airport={arrivalIata}
              terminal={arrivalTerminal}
              gate={arrivalGate}
              delay={arrivalDelay}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default FlightCard;
