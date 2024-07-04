import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import coursedata_1 from "./Data";

import { useNavigation } from "@react-navigation/native";

export default function Course_4() {
  const navigation = useNavigation();
  console.log(coursedata_1);
  return (
    <View>
      <FlatList
        data={coursedata_1}
        horizontal
        renderItem={(e) => {
          return (
            <View
              style={tw`bg-red-300 pt-[2.2rem] pb-[1rem] px-[1rem] m-6 rounded-md`}
            >
              <Image
                style={tw`h-[12rem] w-[14rem] m-auto`}
                source={e.item.img}
              />
              <Text style={tw`text-xl font-semibold text-center mt-[1.3rem]`}>
                {e.item.title}
              </Text>
              <Text
                style={tw`text-xs font-light text-center mt-[0.5rem] w-[15rem]`}
              >
                {e.item.des}
              </Text>
              {/* <TouchableOpacity
                style={tw`bg-blue-500 p-1 w-fit mx-8 rounded-lg mt-3`}
                onPress={() => {
                  navigation.navigate("courseDetail");
                }}
              >
                <Text style={tw`text-sm text-white text-center`}>
                  Course Details
                </Text>
              </TouchableOpacity> */}
            </View>
          );
        }}
      />
    </View>
  );
}
