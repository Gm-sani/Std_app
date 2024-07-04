import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home_1 from "./src/Component/Home_1";
import About_2 from "./src/Component/About_2";
import Course_4 from "./src/Component/Course_4";
import Contact_3 from "./src/Component/Contact_3";
import Userdata_5 from "./src/Component/Userdata_5";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Contact">
        <Stack.Screen
          name="Home"
          component={Home_1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About"
          component={About_2}
          options={{ headerTitle: "About", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact_3}
          options={{ headerTitle: "Contact", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Course"
          component={Course_4}
          options={{ headerTitle: "Course", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="User"
          component={Userdata_5}
          options={{ headerTitle: "User", headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={tw`bg-green-200 h-full w-full`}>
    //   <Home_1 />
    // </View>
  );
}
