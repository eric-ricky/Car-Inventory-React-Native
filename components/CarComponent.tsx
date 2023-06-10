import React from "react";
import { Image, Text, View } from "react-native";
import { ICarsData } from "../utils/types";

interface IProps {
  car: ICarsData;
}

const CarComponent: React.FC<IProps> = ({
  car: { url, model, year, price },
}) => {
  return (
    <View className="pb-5">
      <View className="border border-slate-100 rounded-xl py-5 px-4 bg-white">
        <Text className="text-lg font-medium">
          {model} ({year})
        </Text>

        <Image
          source={{ uri: url }}
          className="w-full h-36 rounded-md overflow-hidden mt-2"
        />

        <View className="pt-2">
          <View className="flex flex-row items-center space-x-2">
            <Text className="text-zinc-500 text-sm">Model:</Text>
            <Text className="text-sm font-medium text-zinc-800">{model}</Text>
          </View>

          <View className="flex flex-row items-center justify-between space-x-4 py-2">
            <Text className="font-medium text-lg">KES {price}</Text>

            <View className="py-2 px-4 rounded-md bg-rose-500">
              <Text className="text-white">Details</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CarComponent;
