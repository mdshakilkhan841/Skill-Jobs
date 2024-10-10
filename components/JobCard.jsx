import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const JobCard = () => {
    return (
        <View className="flex flex-col mt-3 mb-3">
            <View className="flex flex-row items-center justify-between pb-3">
                <Text className="text-black font-medium">
                    Recent Job Circular
                </Text>
                <TouchableOpacity activeOpacity={0.6}>
                    <Text className="text-blue-800 font-medium">View All</Text>
                </TouchableOpacity>
            </View>

            {/* Job Card */}
            <TouchableOpacity
                className="border border-slate-300 h-60 w-52 rounded-lg bg-white p-3 space-y-3"
                activeOpacity={0.5}
            >
                <View className="flex flex-row items-center justify-between space-x-2">
                    <Image
                        className="h-10 w-10 bg-green-100 rounded-full"
                        source={require("../assets/images/react-logo.png")}
                    />
                    <Text className="bg-green-400 rounded-full text-center py-0.5 px-3">
                        Beginner
                    </Text>
                </View>
                <Text
                    className="text-lg font-semibold"
                    numberOfLines={2}
                    style={{ lineHeight: 20 }}
                >
                    Full Stack Developer full tackle React Native
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
                <Text className="text-white text-base font-semibold rounded-full px-[5px] text-center py-1 bg-blue-800 ">
                    Apply
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default JobCard;
