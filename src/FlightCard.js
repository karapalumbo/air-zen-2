import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import "./FlightCard.css";

const FlightCard = ({
  arrivalIata,
  departureIata,
  arrivalTime,
  departureTime,
  status,
  name,
  number,
}) => {
  const [showFlightDetails, setShowFlightDetails] = useState(false);

  const handleShowFlightDetails = () => {
    setShowFlightDetails(!showFlightDetails);
  };

  const todaysDate = new Date();

  const formatTime = (dateString) => {
    let first = dateString.split("T");
    let second = first[1].split(":00");
    return second[0];
  };

  return (
    <div className="flight-card-container">
      <div className="flight-card-details">
        <div className="flight-date-and-status-container">
          <div>{todaysDate.toLocaleDateString()}</div>
          <div className="status"> {status.toUpperCase()}</div>
        </div>
        <div className="flight-to-and-from-container">
          <div>
            <p className="to-from">From</p>
            <h2 className="to-from-iata"> {departureIata}</h2>
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
      </div>
    </div>
  );
};

export default FlightCard;
