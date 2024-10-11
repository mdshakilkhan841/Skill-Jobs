import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";

const SponsorSection = () => {
    return (
        <LinearGradient
            colors={["#3b82f6", "#93c5fd"]} // cyan-500 to blue-500 in hex
            start={{ x: 0, y: 0 }} // starting point (left)
            end={{ x: 1, y: 0 }} // ending point (right)
            style={{ marginVertical: 12 }}
        >
            <View className="flex flex-row items-center justify-center from-cyan-500 to-blue-300 my-1.5 py-3 px-1 h-28">
                <View className="flex justify-between h-full w-1/2">
                    <Text className="text-white text-xs">
                        Skill Jobs Premium
                    </Text>
                    <Text
                        className="text-white text-xl font-bold"
                        style={{ lineHeight: 25 }}
                    >
                        Your Shortcut to Job Success!
                    </Text>
                    <Text className="text-white text-xs">Explore More ➜</Text>
                </View>
                <View className="flex items-center px-5 w-1/2">
                    <Image
                        className="h-36 w-36"
                        source={require("../assets/images/rocket.png")}
                    />
                </View>
            </View>
        </LinearGradient>
    );
};

export default SponsorSection;
