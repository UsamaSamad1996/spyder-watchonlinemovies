import axios from "axios";
import { useState, useEffect } from "react";

///////////////////////////////////////////////////////////////////////////////////

const useFetch = (url) => {
  ///////////////////////////////////////////////////////////////////////////////////

  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;
        setData(data);
        setIsFetching(false);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, [url]);

  return { data, error, isFetching };
};

export default useFetch;
