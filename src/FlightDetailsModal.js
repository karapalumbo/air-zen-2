import React from "react";
import "./FlightDetailsModal.css";

const FlightDetailsModal = ({ travelTime, airport, terminal, gate, delay }) => {
  return (
    <div className="flight-details">
      <br />
      <hr />
      <div className="travel-time">{travelTime}</div>
      <div className="details-container">
        <div>
          <p className="detail">AIRPORT</p>
          <div>{airport}</div>
        </div>
        <div>
          <p className="detail">TERMINAL</p>
          <div>{terminal}</div>
        </div>
        <div>
          <p className="detail">GATE</p>
          <div>{gate}</div>
        </div>
        <div>
          <p className="detail">DELAY</p>
          <div>{delay}</div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetailsModal;
