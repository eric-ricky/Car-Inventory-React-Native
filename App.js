import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import CarsContextProvider from "./lib/context/car";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <CarsContextProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </CarsContextProvider>
    </NavigationContainer>
  );
}
