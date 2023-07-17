import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, options) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios(url, options);
        setResult(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    })();
  }, []);

  return { loading, result, error };
};

export default useFetch;
