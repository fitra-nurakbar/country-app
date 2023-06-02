import { axiosInstanceV3 } from "@/lib/axiosInstance";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface Country {
  name: {
    common: string;
  };
}

export function useFetchAllCountry(name: string) {
  const [data, setData] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axiosInstanceV3.get(`/name/${name}`);

        const data = response.data;

        if (data.length > 5) {
          setData(data.slice(0, 5));
        } else {
          setData(data);
        }
      } catch (error) {
        setError(error as AxiosError);
      } finally {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(() => {
      name !== "" && fetchData();
    }, 500);

    return () => clearTimeout(timer);
  }, [name]);

  return { data, isLoading, error };
}
