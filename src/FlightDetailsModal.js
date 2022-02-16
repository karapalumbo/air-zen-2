import React from "react";
import "./FlightDetailsModal.css";

const FlightDetailsModal = ({ travelTime, airport, terminal, gate, delay }) => {
  const timeConvert = (num) => {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return hours + "h" + " " + minutes + "m";
  };

  return (
    <div className="flight-details">
      <br />
      <hr />
      <div className="travel-time">{travelTime}</div>
      <div className="details-container">
        <div>
          <p className="detail">AIRPORT</p>
          <div>{airport == null ? "TBD" : airport}</div>
        </div>
        <div>
          <p className="detail">TERMINAL</p>
          <div>{terminal == null ? "TBD" : terminal}</div>
        </div>
        <div>
          <p className="detail">GATE</p>
          <div>{gate == null ? "TBD" : gate}</div>
        </div>
        <div>
          <p className="detail">DELAY</p>
          <div className={delay ? "delayed" : undefined}>
            {delay == null ? "On time" : timeConvert(delay)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetailsModal;
