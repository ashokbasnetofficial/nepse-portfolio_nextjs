import React, { useCallback, useState } from "react";
import axios from "axios";
export interface Config {
  method: string;
  url: string;
  data?: any;
  headers?: { [key: string]: string };
}

const useFetch = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const sendRequest = useCallback(
    async (reqConfig: Config, applyData: (data: any) => void) => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios({
          method: reqConfig.method || "GET",
          url: reqConfig.url,
          data:
            reqConfig.method !== "GET" && reqConfig.data
              ? reqConfig.data
              : null,
          headers: reqConfig.headers || { "Content-Type": "application/json" },
        });

        if (response.status !== 200) {
          throw new Error(`Request failed with status: ${response.status}`);
        }

        const data = await response.data;
        applyData(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong!");
      }

      setLoading(false);
    },
    []
  );

  return { loading, error, sendRequest };
};

export default useFetch;
