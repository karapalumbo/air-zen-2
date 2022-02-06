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
            />
          </div>
        );
      })}
    </div>
  );
};

export default ListOfFlights;
