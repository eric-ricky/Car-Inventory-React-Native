import { useEffect, useState } from "react";
import { carsData } from "../../utils/data";
import { ICarsData } from "../../utils/types";

const useFetchCars = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ICarsData[]>([]);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setData(carsData);
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return { isLoading, data };
};

export default useFetchCars;
