import { useEffect, useState } from "react";
import { carsData } from "../../utils/data";

const useFetchCars = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

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
