import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import getCities from "./data/getCities";

function App() {
  const [cities, setCities] = useState(null);
  const [citiesError, setCitiesError] = useState("");

  useEffect(() => {
    getCities().then((data) => {
      console.log({ data });
      if (data && data.response) {
        setCities(data.response);
      } else if (data && data.errorMessage) {
        setCitiesError(data.errorMessage);
      }
    });
  }, []);

  useEffect(() => {
    console.log({ cities, citiesError });
  }, [cities]);

  return <Container maxWidth="sm">Merhaba Yasin!</Container>;
}

export default App;
