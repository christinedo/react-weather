import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setStatus("fetching");
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) {
          throw new Error(`City ${response.statusText}`);
        }
        setData(data);
        setStatus("fetched");
        setError(null);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);
  return { status, data, error };
};
