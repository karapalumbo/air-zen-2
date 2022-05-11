import { useEffect, useState } from "react";

import getAllFlights from "./api";
import FlightCard from "./FlightCard";
import Loading from "./Loading";
import useLocalStorage from "./localStorage";
import "./ListOfFlights.css";

const ListOfFlights = () => {
  const [allFlights, setAllFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [localStorageFlights, setLocalStorageFlights] = useLocalStorage();
  const [listOfAllFlights, setListOfAllFlights] = useState([]);

  const getAllFlightInfo = async () => {
    const allFlightInfo = await getAllFlights();
    setAllFlights(allFlightInfo.data);
    setLocalStorageFlights(allFlightInfo.data);
    setListOfAllFlights(allFlightInfo.data);
    setFilteredFlights(allFlightInfo.data);
  };

  useEffect(() => {
    getAllFlightInfo();
  }, []);

  const handleSearchFlights = (event) => {
    const value = event.target.value.toLowerCase();

    if (value !== "") {
      const filterByFlight = allFlights.filter((flight) => {
        const airlineName = flight?.airline?.name?.toLowerCase();
        return airlineName?.includes(value);
      });
      setFilteredFlights(filterByFlight);
      setAllFlights(filterByFlight);
    } else {
      setFilteredFlights(listOfAllFlights);
    }
  };

  if (!allFlights) {
    return <Loading />;
  }

  return (
    <div className="all-flights-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search flights"
        onChange={handleSearchFlights}
      ></input>
      {filteredFlights.map((flight) => {
        return (
          <div>
            <FlightCard
              key={flight.flight.number}
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
