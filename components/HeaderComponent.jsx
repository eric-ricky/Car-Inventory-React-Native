import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MagnifyingGlassIcon, XMarkIcon } from "react-native-heroicons/outline";

const HeaderComponent = ({ setInput, input }) => {
  return (
    <View className="pt-20 pb-10 bg-white">
      <View className="container mx-auto px-4">
        <Text className="text-3xl font-bold text-zinc-800 text-center">
          Your Car Inventory
        </Text>
        <Text className="text-zinc-500 mt-4 px-2 text-center mb-5">
          Connecting you to the biggest brands in car rental
        </Text>

        <View className="flex-row items-center space-x-2 bg-slate-50 rounded-3xl p-2 pl-4 my-4 border border-slate-200">
          <MagnifyingGlassIcon size={20} color="#123456" />
          <TextInput
            onChangeText={setInput}
            value={input}
            placeholder="Filter by year e.g. 2018"
            keyboardType="numeric"
            className="flex-grow text-zinc-800"
          />

          {input && (
            <TouchableOpacity
              onPress={() => setInput("")}
              className="p-2 rounded-3xl bg-rose-50"
            >
              <XMarkIcon size={20} color="rgb(244, 63, 94)" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default HeaderComponent;
