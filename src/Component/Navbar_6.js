import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

export default function Navbar_6() {
  const navigation = useNavigation();
  return (
    <View
      style={tw`flex-row gap-3 justify-between mt-8 border-t border-slate-300 pt-2`}
    >
      {/* ---------------------------------About us----------------------------- */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("About");
        }}
        style={tw` rounded`}
      >
        {/* <Text style={tw`text-xs font-semibold`}> */}
        <Image
          style={tw`h-[2rem] w-[2rem]`}
          source={require("./baricon_1.png")}
        />
        {/* </Text> */}
      </TouchableOpacity>
      {/* ---------------------------------Contact us----------------------------- */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Contact");
        }}
        style={tw` mt-[-0.5rem] rounded`}
      >
        <Image
          style={tw`h-[2.7rem] w-[2rem]`}
          source={require("./baricon_2.png")}
        />
      </TouchableOpacity>
      {/* ---------------------------------Course ----------------------------- */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Course");
        }}
        style={tw`rounded`}
      >
        <Image
          style={tw`h-[2rem] w-[2rem]`}
          source={require("./baricon_3.png")}
        />
      </TouchableOpacity>
      {/* ---------------------------------User----------------------------- */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("User");
        }}
        style={tw` rounded`}
      >
        <Image
          style={tw`h-[2rem] w-[2rem]`}
          source={require("./baricon_4.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
