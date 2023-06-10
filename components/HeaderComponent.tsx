import { Dispatch, SetStateAction } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { MagnifyingGlassIcon, XMarkIcon } from "react-native-heroicons/outline";

interface IProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

const HeaderComponent: React.FC<IProps> = ({ query, setQuery }) => {
  return (
    <View className="flex-row items-center space-x-2 bg-slate-100 rounded-full p-2 pl-4 mx-8 my-4 border border-slate-200 mt-14">
      <MagnifyingGlassIcon size={20} color="#123456" />
      <TextInput
        onChangeText={setQuery}
        value={query}
        placeholder="Filter by year e.g. 2018"
        keyboardType="numeric"
        className="flex-grow text-zinc-800"
      />

      {query && (
        <TouchableOpacity
          onPress={() => setQuery("")}
          className="p-2 rounded-3xl bg-rose-50"
        >
          <XMarkIcon size={20} color="rgb(244, 63, 94)" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HeaderComponent;
