import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

const useAxios = (url: string) => {
  const [isData, setIsData] = useState<{
    loading: boolean;
    data: AxiosResponse | null;
    error: string | null;
  }>({ loading: true, data: null, error: null });

  useEffect(() => {
    instance
      .get(url)
      .then((res) => {
        setIsData({ ...isData, data: res.data, loading: false });
      })
      .catch((e) => setIsData({ ...isData, error: e }));
  }, [url]);
  return isData;
};

export default useAxios;
