import { createContext, useContext } from "react";
import useFetchCars from "../hooks/useFetchCars";

const CarsContext = createContext(null);

const CarsContextProvider = ({ children }) => {
  const { isLoading, data: cars } = useFetchCars();

  return (
    <CarsContext.Provider value={{ cars, isLoading }}>
      {children}
    </CarsContext.Provider>
  );
};

export default CarsContextProvider;

export const useCarsContext = () => useContext(CarsContext);
