import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import CarComponent from "../components/CarComponent";
import HeaderComponent from "../components/HeaderComponent";
import LoadingComponent from "../components/LoadingComponent";
import { useCarsContext } from "../lib/context/cars";
import { ICarsData } from "../utils/types";

const HomeScreen = () => {
  const carsCtx = useCarsContext();
  const [query, setQuery] = useState("");
  const [filteredCars, setFilteredCars] = useState<ICarsData[]>([]);

  useEffect(() => {
    if (!carsCtx?.cars) return;

    // sorting
    const sortedCars = carsCtx?.cars.sort((a, b) => a.year - b.year);

    // filtering
    let filtered = sortedCars;
    if (query) {
      filtered = filtered.filter((car) => car.year === +query);
    }

    setFilteredCars(filtered);
  }, [carsCtx, query]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeaderComponent query={query} setQuery={setQuery} />

      {carsCtx && carsCtx.isLoading ? (
        <LoadingComponent />
      ) : (
        <FlatList
          className="py-10 px-8"
          data={filteredCars}
          keyExtractor={(item: ICarsData) => item.id}
          ListEmptyComponent={() => (
            <View className="items-center space-y-2">
              <Text className="text-2xl">😢</Text>
              <Text className="font-medium">No car was found</Text>
            </View>
          )}
          renderItem={({ item: car }: { item: ICarsData }) => (
            <CarComponent car={car} />
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
