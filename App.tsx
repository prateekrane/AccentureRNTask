import { NavigationContainer } from "@react-navigation/native";
import DataListDisplay from "./Screens/DataListDisplay";
import BottomTabs from "./Navigation/BottomTab";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartProvider } from "./Components/CartContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MainTabs"
            component={BottomTabs}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="DetailList"
            component={DataListDisplay}
            options={{
              title: "MyShoppy",
              headerTitleStyle: { fontSize: 25, color: "#4A6D73" },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
