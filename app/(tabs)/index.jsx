import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Octicons } from "@expo/vector-icons";
import JobList from "../../components/JobCard";
import TrendingJobList from "../../components/TrendingJobCard";
import { router } from "expo-router";

const index = () => {
    const category = [
        { id: 1, name: "Manufacturer" },
        { id: 2, name: "Software Development" },
        { id: 3, name: "Education, Tanning and Development" },
        { id: 4, name: "IT Services and IT Consulting" },
        { id: 5, name: "Creative" },
        { id: 6, name: "React Developer" },
        { id: 7, name: "Faculty Member" },
    ];

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
            <View className="mx-4 py-3">
                <TouchableOpacity
                    className="flex flex-row items-center bg-sky-400 border border-slate-200 rounded px-4 h-10 space-x-5"
                    activeOpacity={0.6}
                    onPress={() => router.push("/searchJobs")}
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
                <JobList />

                {/* Trending Job Section */}
                <TrendingJobList />

                {/* Sponsor Section */}
                <View className="flex flex-row items-center justify-center bg-blue-400 my-3 py-2 h-28">
                    <View className="flex items-center px-5">
                        <Text
                            className="text-blue-800 text-lg font-bold li"
                            style={{ lineHeight: 20 }}
                        >
                            Sponsored
                        </Text>
                        <Text className="text-black font-medium">Jobs</Text>
                    </View>
                </View>

                {/* Category Section */}
                <View className="flex flex-col mb-6">
                    <View className="flex flex-row items-center pt-2 pb-3">
                        <Text className="text-black font-medium">
                            Browse Job by Category
                        </Text>
                    </View>
                    <View className="flex flex-row flex-wrap justify-betwee gap-2.5">
                        {category.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                className="bg-white px-4 py-2 rounded-md border border-slate-300"
                                activeOpacity={0.5}
                            >
                                <Text className="text-gray-600 text-sm font-medium">
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default index;
