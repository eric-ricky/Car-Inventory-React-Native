import React from "react";
import { ScrollView, View } from "react-native";

const LoadingComponent = () => {
  return (
    <ScrollView>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="py-4 pb-10 bg-slate-50"
      >
        {[1, 2, 3, 4].map((n) => (
          <CarComponent key={n} />
        ))}
      </ScrollView>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="py-4 pb-10 bg-slate-50"
      >
        {[1, 2, 3, 4].map((n) => (
          <CarComponent key={n} />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default LoadingComponent;

const CarComponent = () => (
  <View className="col-span-12 px-2 pb-5">
    <View className="border border-slate-200 rounded-xl py-5 px-4">
      <View className="h-3 w-24 bg-slate-200 animate-pulse mb-2"></View>

      <View className="w-44 h-36 bg-slate-200 rounded-md overflow-hidden mt-2 animate-pulse"></View>

      <View className="pt-2">
        <View className="flex flex-row items-center space-x-2 mb-2">
          <View className="h-2 w-16 bg-slate-200 animate-pulse"></View>
          <View className="h-2 w-12 bg-slate-200 animate-pulse"></View>
        </View>

        <View className="flex flex-row items-center justify-between space-x-4 py-2">
          <View className="h-3 w-24 bg-slate-200 animate-pulse"></View>

          <View className="h-7 w-20 rounded-md bg-slate-200 animate-pulse"></View>
        </View>
      </View>
    </View>
  </View>
);
