import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface Country {
  name: {
    common: string;
  };
}

export function useFetchCountry(inputValue: string) {
  const [data, setData] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
    
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_API_URL}/name/${inputValue}`
        );
        
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
      inputValue !== "" && fetchData();
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue]);

  return { data, isLoading, error };
}
