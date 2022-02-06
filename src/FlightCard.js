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
  const todaysDate = new Date();

  const formatTime = (dateString) => {
    let first = dateString.split("T");
    let second = first[1].split(":00");
    return second[0];
  };

  return (
    <div className="flight-card-container">
      <div className="flight-card-details">
        <div className="flight-date-and-status">
          <div>{todaysDate.toLocaleDateString()}</div>
          <div>{status}</div>
        </div>
        <div className="flight-to-and-from">
          <div>From: {departureIata}</div>
          <div>To: {arrivalIata}</div>
        </div>
        <div className="flight-departure-and-arrival">
          <div>Departure: {formatTime(departureTime)}</div>
          <div>Arrival: {formatTime(arrivalTime)}</div>
        </div>
        <div className="flight-name-and-number">
          <div>
            {name} {number}
          </div>
          <div>V</div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
