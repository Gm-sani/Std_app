import React from "react";
import { Image, Text, View } from "react-native";
import tw from "twrnc";
import Navbar_6 from "./Navbar_6";
export default function Home_1() {
  return (
    <View style={tw`pt-[3rem] m-6`}>
      <Image
        style={tw`h-[12rem] w-[17.5rem] rounded-md`}
        source={require("./homepic_2.jpeg")}
      />
      <Text
        style={tw`text-2xl font-semibold text-slate-900 text-center tracking-widest mt-[2rem]`}
      >
        WELCOME TO
      </Text>
      <Text
        style={tw`text-2xl font-semibold text-slate-900 text-center tracking-widest mt-[0.2rem]`}
      >
        GMS APP
      </Text>
      <Text
        style={tw`text-sm font-light text-slate-600 text-center tracking-tight mt-[1rem]`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, vel
        numquam reiciendis quis necessitatibus officiis! reiciendis quis
        necessitatibus officiis!
      </Text>
      <View style={tw`mt-[1rem]`}>
        <Navbar_6 />
      </View>
    </View>
  );
}
