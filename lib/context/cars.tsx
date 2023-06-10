import { ReactNode, createContext, useContext } from "react";
import { ICarsData } from "../../utils/types";
import useFetchCars from "../hooks/useFetchCars";

interface ICarsContext {
  cars: ICarsData[];
  isLoading: boolean;
}

const CarsContext = createContext<ICarsContext | null>(null);

interface ICarsContextProvider {
  children: ReactNode;
}

const CarsContextProvider: React.FC<ICarsContextProvider> = ({ children }) => {
  const { isLoading, data: cars } = useFetchCars();

  return (
    <CarsContext.Provider value={{ cars, isLoading }}>
      {children}
    </CarsContext.Provider>
  );
};

export default CarsContextProvider;

export const useCarsContext = () => useContext(CarsContext);
