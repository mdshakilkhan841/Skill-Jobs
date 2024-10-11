import React, { useEffect, useMemo } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useJobStore } from "../store/jobStore";
import JobCardSkeleton from "./JobCardSkeleton";
import { router } from "expo-router";

const JobCard = ({ job }) => {
    return (
        <TouchableOpacity
            className="border border-slate-300 h-60 w-52 rounded-lg bg-white p-3 space-y-3"
            activeOpacity={0.5}
        >
            <View className="flex flex-row items-center justify-between space-x-2">
                <Image
                    className="h-10 w-10 bg-green-100 rounded-full"
                    source={require("../assets/images/react-logo.png")} // You can replace this with dynamic job image if available
                />
                <View className="flex w-20 bg-green-400 rounded-full py-0.5">
                    <Text className="text-center text-xs text-slate-700">
                        {job.level || "Mid Label"}{" "}
                        {/* Display job level dynamically */}
                    </Text>
                </View>
            </View>
            <Text
                className="text-lg font-semibold h-10"
                numberOfLines={2}
                style={{ lineHeight: 20 }}
            >
                {job.title || "Full Stack Developer"} {/* Dynamic job title */}
            </Text>
            <View>
                <Text
                    className="text-gray-600 text-xs font-medium"
                    numberOfLines={1}
                >
                    {job.company || "Company Name"} {/* Dynamic company name */}
                </Text>
                <View className="flex flex-row items-center w-full space-x-1">
                    <Text
                        className="text-gray-600 text-xs w-3/5 font-medium"
                        numberOfLines={1}
                    >
                        {job.location || "Location, Country"}{" "}
                        {/* Dynamic location */}
                    </Text>
                    <Text
                        className="text-gray-600 text-xs text-left font-medium"
                        numberOfLines={1}
                    >
                        • {job.daysAgo || 2} days ago{" "}
                        {/* Dynamic posting date */}
                    </Text>
                </View>
            </View>
            <View className="flex flex-row items-center space-x-2">
                <Text className="text-green-600 font-medium border border-green-600 rounded-full px-[5px] text-center">
                    ৳
                </Text>
                <Text className="text-green-600 text-xs font-medium">
                    {job.salary || "Negotiable"} {/* Dynamic salary */}
                </Text>
            </View>
            <Text className="text-white text-base font-semibold rounded-full px-[5px] text-center py-1 bg-blue-800 ">
                Apply
            </Text>
        </TouchableOpacity>
    );
};

const JobList = () => {
    const { totalJobs, next_cursor, isLoading, error, getNewJobs } =
        useJobStore();
    // console.log("🚀 ~ JobList ~ next_cursor:", next_cursor);
    // console.log("🚀 ~ JobList ~ totalJobs:", totalJobs);

    useEffect(() => {
        getNewJobs(); // Fetch the jobs on component mount
    }, []);

    return (
        <View className="flex flex-col mt-3 mb-3">
            <View className="flex flex-row items-center justify-between pb-3">
                <Text className="text-black font-medium">
                    Recent Job Circulars
                </Text>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => router.push("/viewAllJobs")}
                >
                    <Text className="text-blue-800 font-medium">View All</Text>
                </TouchableOpacity>
            </View>

            {/* Horizontal Job Card List using FlatList */}
            <FlatList
                data={totalJobs}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <JobCard job={item} />} // Render each job card
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 12 }}
                // Showing skeleton on loading state
                ListFooterComponent={
                    isLoading ? (
                        <View className="flex flex-row" style={{ gap: 12 }}>
                            {Array(5)
                                .fill(null)
                                .map((_, index) => (
                                    <JobCardSkeleton key={index} />
                                ))}
                        </View>
                    ) : (
                        <TouchableOpacity
                            className="flex justify-center border border-slate-300 h-60 w-52 rounded-lg bg-white p-3"
                            activeOpacity={0.6}
                            onPress={() => router.push("/viewAllJobs")}
                        >
                            <Text className="text-gray-600 text-center font-medium">
                                View All
                            </Text>
                        </TouchableOpacity>
                    )
                }
            />
        </View>
    );
};

export default JobList;
