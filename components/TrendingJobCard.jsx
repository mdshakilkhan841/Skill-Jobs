import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const TrendingJobCard = () => {
    return (
        <View className="flex flex-col mb-3">
            <View className="flex flex-row items-center pt-2 pb-3">
                <Text className="text-black font-medium">Trending Jobs</Text>
            </View>

            {/* Trending Job Card */}
            <TouchableOpacity
                className="flex flex-row  border border-slate-300 w-11/12 rounded-lg bg-white p-3 space-x-3"
                activeOpacity={0.5}
            >
                <View className="flex items-center justify-center w-1/5">
                    <Image
                        className="h-14 w-14 bg-green-100 rounded-full"
                        source={require("../assets/images/react-logo.png")}
                    />
                </View>
                <View className="flex flex-col justify-center w-4/5 space-y-2">
                    <Text
                        className="text-lg font-semibold"
                        numberOfLines={2}
                        style={{ lineHeight: 20 }}
                    >
                        Full Stack Developer
                    </Text>
                    <View>
                        <Text className="text-gray-600 text-xs font-medium">
                            Company Name
                        </Text>
                        <View className="flex flex-row items-center w-full space-x-1">
                            <Text
                                className="text-gray-600 text-xs w-3/5 font-medium"
                                numberOfLines={1}
                            >
                                Location, Countrydfsdf
                            </Text>
                            <Text className="text-gray-600 text-xs text-left font-medium">
                                • {2} days ago
                            </Text>
                        </View>
                    </View>
                    <View className="flex flex-row items-center space-x-2">
                        <Text className="text-green-600 font-medium border border-green-600 rounded-full px-[5px] text-center">
                            ৳
                        </Text>
                        <Text className="text-green-600 text-xs font-medium">
                            Negotiable
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default TrendingJobCard;
