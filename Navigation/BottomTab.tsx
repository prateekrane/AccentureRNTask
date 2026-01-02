import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Category from "../Screens/Category";
import Cart from "../Screens/Cart";
import AntDesign from "@expo/vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: "MyShoppy",
        headerTitleStyle: {
          justifyContent: "flex-start",
          fontStyle: "italic",
          fontSize: 25,
          color: "#4A6D73",
        },
        tabBarStyle: {
          backgroundColor: "#4A6D73",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#B0C4C8",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarLabel: "Category",
          tabBarIcon: ({ color }) => (
            <AntDesign name="appstore" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => (
            <AntDesign name="shopping-cart" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
