import React from "react";
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

export default function About_2() {
  return (
    <View>
      <Text style={tw`text-lg mt-[2rem] text-center font-semibold `}>
        Gmsani
      </Text>
      <Text style={tw`text-lg text-center font-light `}>
        I am a Front-End Developer
      </Text>
      <Image
        style={tw`h-[10rem] w-[10rem] m-auto mt-3 rounded-full`}
        source={require("./homepic_2.jpeg")}
      />
      <View style={tw`bg-blue-500 w-full mt-3`}>
        <Text style={tw`text-lg text-white font-semibold py-2 text-center`}>
          About Me
        </Text>
        <Text style={tw`text-xs text-center text-white px-4 py-1 `}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
          ipsa? Et, repudiandae nostrum. Laboriosam fuga unde, distinctio
          laborum vitae assumenda?
        </Text>
      </View>
      <Text style={tw`text-center text-lg font-semibold mt-4 tracking-tighter`}>
        FOLLOW ME ON SOCIAL NETWORK
      </Text>
      <View style={tw`mx-9 mt-2 flex-row gap-2 justify-between`}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("www.youtube.com/@gmsanivlogs8523");
          }}
        >
          <Image
            style={tw`h-[3rem] w-[3rem]`}
            source={require("./insta_1.jpeg")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("www.youtube.com/@gmsanivlogs8523");
          }}
        >
          <Image
            style={tw`h-[3rem] w-[3rem]`}
            source={require("./Youtube_2.jpg")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("www.youtube.com/");
          }}
        >
          <Image
            style={tw`h-[3rem] w-[3rem]`}
            source={require("./linkden_3.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
