import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Octicons } from "@expo/vector-icons";
import JobCard from "../../components/JobCard";
import TrendingJobCard from "../../components/TrendingJobCard";

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
                className="fle-1 bg-gray-100 px-3"
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
                <JobCard />

                {/* Trending Job Section */}
                <TrendingJobCard />

            </ScrollView>
        </SafeAreaView>
    );
};

export default index;
