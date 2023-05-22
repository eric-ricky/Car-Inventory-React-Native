import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { ExclamationTriangleIcon } from "react-native-heroicons/outline";
import CarComponent from "../components/CarComponent";
import HeaderComponent from "../components/HeaderComponent";
import LoadingComponent from "../components/LoadingComponent";
import { useCarsContext } from "../context/CarContext";

const HomeScreen = () => {
  const navigation = useNavigation();
  const carsCtx = useCarsContext();
  const [input, setInput] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    const cars = carsCtx?.cars;
    if (!cars) return;

    // sorting
    const sortedCars = cars.sort((a, b) => a.year - b.year);

    // filtering
    let filtered = sortedCars;
    if (input) {
      filtered = filtered.filter((car) => car.year === +input);
    }

    setFilteredCars(filtered);
  }, [carsCtx, input]);

  return (
    <SafeAreaView className="pb-20">
      <HeaderComponent setInput={setInput} input={input} />

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 50,
          paddingTop: 25,
          marginBottom: 40,
        }}
        className="bg-slate-50 min-h-screen pb-32"
      >
        {carsCtx?.isLoading ? (
          <LoadingComponent />
        ) : (
          <>
            {carsCtx?.cars && filteredCars.length ? (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: 15,
                }}
                className="py-4 pb-10 bg-slate-50"
              >
                {filteredCars.map((car) => (
                  <CarComponent
                    key={car.id}
                    model={car.model}
                    price={car.price}
                    url={car.url}
                    year={car.year}
                  />
                ))}
              </ScrollView>
            ) : (
              <View className="px-5 py-10 mt-4 items-center">
                <ExclamationTriangleIcon size={30} color="#00ccbb" />
                <Text className="text-slate-800">No Cars Found</Text>
              </View>
            )}
          </>
        )}

        <View className="h-80"></View>

        {/* <ScrollView
          horizontal
          contentContainerStyle={{
            paddingVertical: 25,
          }}
          className="bg-rose-500"
        >
          {[1, 2, 3, 4].map((n) => (
            <View key={n} className="h-56"></View>
          ))}
        </ScrollView> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
