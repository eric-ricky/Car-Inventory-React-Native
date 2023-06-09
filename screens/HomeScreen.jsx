import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import CarComponent from "../components/CarComponent";
import HeaderComponent from "../components/HeaderComponent";
import LoadingComponent from "../components/LoadingComponent";
import { useCarsContext } from "../lib/context/car";

const HomeScreen = () => {
  const navigation = useNavigation();
  const carsCtx = useCarsContext();
  const [query, setQuery] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);

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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeaderComponent query={query} setQuery={setQuery} />

      {carsCtx && carsCtx.isLoading ? (
        <LoadingComponent />
      ) : (
        <FlatList
          className="py-10 px-8"
          data={filteredCars}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => (
            <View className="items-center space-y-2">
              <Text className="text-2xl">😢</Text>
              <Text className="font-medium">No car was found</Text>
            </View>
          )}
          renderItem={({ item: car }) => (
            <CarComponent
              model={car.model}
              price={car.price}
              url={car.url}
              year={car.year}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
