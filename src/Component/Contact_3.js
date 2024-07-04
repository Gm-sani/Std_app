import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

export default function Contact_3() {
  return (
    <View style={tw`p-5`}>
      <Text style={tw`text-lg font-semibold  `}>Level Up Your Knowledge</Text>
      <Text style={tw`text-sm tracking-wide font-light  `}>
        You can reach us anytime via Gms@gmail.com
      </Text>
      <Text style={tw`mt-5 text-xs`}>Enter Your name</Text>
      <TextInput
        placeholder="Name"
        style={tw`font-light border text-xs mt-1 border-black p-2`}
      />
      <Text style={tw`mt-5 text-xs`}>Enter Your Email</Text>
      <TextInput
        placeholder="Email"
        style={tw`font-light border text-xs mt-1 border-black p-2`}
      />
      <Text style={tw`mt-5 text-xs`}>Enter Your Mobile</Text>
      <TextInput
        placeholder="Mobile"
        style={tw`font-light border text-xs mt-1 border-black p-2`}
      />
      <Text style={tw`mt-5 text-xs`}>How can we help you?</Text>
      <TextInput
        placeholder="Tell us about yourself?"
        style={tw`font-light border text-xs mt-1 border-black py-8 px-6`}
      />
      <TouchableOpacity style={tw`bg-blue-500 mt-4 mx-5 rounded-md p-2`}>
        <Text style={tw`text-center text-white`}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
}
