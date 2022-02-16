import getAllFlights from "./api";
import FlightCard from "./FlightCard";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import "./ListOfFlights.css";

const ListOfFlights = () => {
  const [allFlights, setAllFlights] = useState([]);

  const getAllFlightInfo = async () => {
    const allFlightInfo = await getAllFlights();
    setAllFlights(allFlightInfo.data);
  };

  useEffect(() => {
    getAllFlightInfo();
  }, []);

  if (!allFlights) {
    return <Loading />;
  }

  return (
    <div className="all-flights-container">
      {allFlights.map((flight) => {
        return (
          <div>
            <FlightCard
              arrivalIata={flight.arrival.iata}
              departureIata={flight.departure.iata}
              arrivalTime={flight.arrival.scheduled}
              departureTime={flight.departure.scheduled}
              status={flight.flight_status}
              name={flight.airline.name}
              number={flight.flight.number}
              arrivalTerminal={flight.arrival.terminal}
              departureTerminal={flight.departure.terminal}
              arrivalGate={flight.arrival.gate}
              departureGate={flight.departure.gate}
              arrivalDelay={flight.arrival.delay}
              departureDelay={flight.departure.delay}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ListOfFlights;
