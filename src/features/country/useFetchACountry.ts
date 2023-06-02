import { axiosInstanceV3, axiosInstanceV2 } from "@/lib/axiosInstance";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface Country {
  name: {
    common: string;
  };
  flags: {
    alt: string;
    svg: string;
  };
  altSpellings: string[];
  latlng: number[];
  capital: string;
  region: string;
  subregion: string;
  callCode: string;
}

interface CallingCode {
  name: string;
  callingCodes: number[];
}

interface Currency {
  name: string;
  currencies: [
    {
      code: string;
    }
  ];
}

export function useFetchACountry(name: string | undefined) {
  const [data, setData] = useState<Country>({
    name: {
      common: "",
    },
    flags: {
      alt: "",
      svg: "",
    },
    altSpellings: [],
    latlng: [],
    capital: "",
    region: "",
    subregion: "",
    callCode: "",
  });

  const [callCode, setCallCode] = useState<CallingCode[]>([]);
  const [currency, setCurrency] = useState<Currency[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axiosInstanceV3.get(
          `/name/${name}?fullText=true`
        );

        const data = response.data;
        const country = data[0];

        if (data.length > 0) {
          const codeCall =
            country.idd.root.replace("+", "") + country.idd.suffixes.join("");

          const callCodeResponse = await axiosInstanceV2.get(
            `/callingcode/${codeCall}`
          );

          const currencyKeys = Object.keys(country.currencies);
          const currencyResponse = await axiosInstanceV2.get(
            `/currency/${currencyKeys}`
          );

          setCurrency(currencyResponse.data);
          setCallCode(callCodeResponse.data);
        }

        setData(country);
      } catch (error) {
        setError(error as AxiosError);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [name]);

  return { data, callCode, currency, isLoading, error };
}
