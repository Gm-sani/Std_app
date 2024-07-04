import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import tw from "twrnc";

export default function Userdata_5() {
  const [dat, setDat] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const getuserdata = async () => {
    try {
      const res = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const mydata = await res.json();
      console.log(mydata);
      setDat(mydata);
      setLoaded(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getuserdata();
  }, []);
  return (
    <View style={tw`m-[1.7rem]`}>
      {loaded ? (
        <View>
          <ActivityIndicator size={"large"} style={tw`h-[12rem] mt-[50%] `} />
        </View>
      ) : (
        <FlatList
          horizontal
          data={dat}
          renderItem={(e) => {
            return (
              <View style={tw`m-1 bg-red-200`}>
                <Image
                  source={{ uri: e.item.image }}
                  style={tw`h-[12rem] w-[16.6rem]`}
                />
                <View style={tw`p-3 bg-slate-700  `}>
                  <Text
                    style={tw`text-[1.5rem] text-white font-semibold mt-1 `}
                  >
                    Bio Data
                  </Text>
                  <Text style={tw`text-sm  mt-[1.3rem] text-white`}>
                    Name :{e.item.name}
                  </Text>
                  <Text style={tw`text-sm  mt-[0.3rem] text-white`}>
                    Email :{e.item.email}
                  </Text>
                  <Text style={tw`text-sm  mt-[0.3rem] text-white`}>
                    Mobile :{e.item.mobile}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      )}
    </View>
  );
}
