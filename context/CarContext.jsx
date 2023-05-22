import { createContext, useContext, useEffect, useState } from "react";
import { carsData } from "../utils/data";

const CarsContext = createContext(null);

const CarsContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setCars(carsData);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CarsContext.Provider value={{ cars, isLoading }}>
      {children}
    </CarsContext.Provider>
  );
};

export default CarsContextProvider;

export const useCarsContext = () => useContext(CarsContext);
