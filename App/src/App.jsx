import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/products`)
      .then((response) => {
        // console.log(response.data);
        setdata(response.data);
      })
      .catch((err) => console.log(err));
  }, [data]);

  return <h1>{data}</h1>;
}

export default App;
//
