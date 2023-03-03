import axios from "axios";

const getCities = async (cityId: number = 2) => {
  let response;
  let errorMessage;

  await axios
    .get(`https://ezanvakti.herokuapp.com/sehirler/${cityId}`)
    .then((res) => (response = res.data))
    .catch((error) => (errorMessage = error.response.data.error.message));

  return { response, errorMessage };
};

export default getCities;
