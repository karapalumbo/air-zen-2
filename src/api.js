import axios from "axios";

const ACCESS_KEY = "f80af8f709f0305d4c90be01d53b4ddc";

const getAllFlights = async () => {
  let response = await axios.get(
    `http://api.aviationstack.com/v1/flights?access_key=${ACCESS_KEY}`
  );
  return response.data;
};

export default getAllFlights;
