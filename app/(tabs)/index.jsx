import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Octicons } from "@expo/vector-icons";

const index = () => {
    return (
        <SafeAreaView className="bg-sky-500 h-full">
            {/* Header */}
            <View className="flex flex-row h-10 items-center justify-between mt-3 mb-2">
                <View className="flex flex-row items-center justify-center h-full ">
                    <TouchableOpacity
                        className="flex items-center justify-center h-full px-4 rounded-full"
                        activeOpacity={0.6}
                    >
                        <Octicons name="three-bars" size={28} color="white" />
                    </TouchableOpacity>
                    <Text className="text-white text-base font-semibold px-3">
                        Find Your Dream Jobs
                    </Text>
                </View>
                <TouchableOpacity className="flex items-center justify-center px-4 h-full">
                    <Image
                        className="h-10 w-10 bg-white rounded-full"
                        source={require("../../assets/images/react-logo.png")}
                    />
                </TouchableOpacity>
            </View>

            {/* Search Bar */}
            <View className="mx-3 py-3">
                <TouchableOpacity
                    className="flex flex-row items-center bg-sky-400 border border-slate-200 rounded px-4 h-10 space-x-5"
                    activeOpacity={0.6}
                >
                    <View className="flex items-center justify-center">
                        <Octicons name="search" size={24} color="white" />
                    </View>
                    <Text className="text-white text-sm font-semibold">
                        Search Jobs
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Body */}
            <ScrollView
                className="fle-1 bg-gray-100 px-3 space-y-3"
                showsVerticalScrollIndicator={false}
            >
                {/* Count Section */}
                <View className="flex flex-row items-center justify-center bg-white my-3 rounded-lg py-2 border border-slate-300 divide-x divide-slate-300">
                    <View className="flex items-center px-5">
                        <Text
                            className="text-blue-800 text-lg font-bold li"
                            style={{ lineHeight: 20 }}
                        >
                            46
                        </Text>
                        <Text className="text-black font-medium">
                            Live Jobs
                        </Text>
                    </View>
                    <View className="flex items-center px-5">
                        <Text
                            className="text-blue-800 text-lg font-bold"
                            style={{ lineHeight: 20 }}
                        >
                            4650
                        </Text>
                        <Text className="text-black font-medium">
                            Companies
                        </Text>
                    </View>
                    <View className="flex items-center px-5">
                        <Text
                            className="text-blue-800 text-lg font-bold"
                            style={{ lineHeight: 20 }}
                        >
                            23
                        </Text>
                        <Text className="text-black font-medium">New Jobs</Text>
                    </View>
                </View>

                {/* Job Section */}
                <View className="flex flex-col">
                    <View className="flex flex-row items-center justify-between pb-3">
                        <Text className="text-black font-medium">
                            Recent Job Circular
                        </Text>
                        <TouchableOpacity activeOpacity={0.6}>
                            <Text className="text-blue-800 font-medium">
                                View All
                            </Text>
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
                                source={require("../../assets/images/react-logo.png")}
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

                {/* Trending Job Section */}
                <View className="flex flex-col">
                    <View className="flex flex-row items-center pt-2 pb-3">
                        <Text className="text-black font-medium">
                            Trending Jobs
                        </Text>
                    </View>

                    {/* Trending Job Card */}
                    <TouchableOpacity
                        className="flex flex-row  border border-slate-300 w-11/12 rounded-lg bg-white p-3 space-x-3"
                        activeOpacity={0.5}
                    >
                        <View className="flex items-center justify-center w-1/5">
                            <Image
                                className="h-14 w-14 bg-green-100 rounded-full"
                                source={require("../../assets/images/react-logo.png")}
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
            </ScrollView>
        </SafeAreaView>
    );
};

export default index;
