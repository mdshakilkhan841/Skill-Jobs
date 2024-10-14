import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { Octicons } from "@expo/vector-icons";

import {
    View,
    TouchableOpacity,
    Text,
    ScrollView,
    Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useRef } from "react";
import { router, useLocalSearchParams } from "expo-router";

const HEADER_MAX_HEIGHT = 150;
const HEADER_MIN_HEIGHT = 120;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const JobDetails = () => {
    const { job } = useLocalSearchParams();
    const jobDetails = JSON.parse(job);
    const jobQualification = JSON.parse(jobDetails?.qualifications);

    const scrollY = useRef(new Animated.Value(0)).current;

    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: "clamp",
    });

    const imageSize = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [65, 35],
        extrapolate: "clamp",
    });

    const imageMarginTop = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [HEADER_MAX_HEIGHT - 32, 42],
        extrapolate: "clamp",
    });

    const imageMarginLeft = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [48, 60],
        extrapolate: "clamp",
    });

    return (
        <SafeAreaView className="bg-sky-500 h-full">
            <Animated.View
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1,
                    height: headerHeight,
                    backgroundColor: "rgb(14 165 233)",
                    borderRadius: 15,
                }}
            >
                <View className="flex flex-row h-10 items-center justify-between mt-10 mb-3">
                    <TouchableOpacity
                        className="flex items-center justify-center h-full px-4 rounded-full"
                        activeOpacity={0.6}
                        onPress={() => router.back()}
                    >
                        <Octicons name="arrow-left" size={28} color="white" />
                    </TouchableOpacity>
                    <View className="flex items-center justify-between px-3">
                        <Text className="text-lg font-semibold text-white">
                            Job Details
                        </Text>
                    </View>
                    <TouchableOpacity
                        className="flex items-center justify-center px-4 h-full"
                        activeOpacity={0.6}
                    >
                        <Octicons
                            name="share-android"
                            size={20}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
                <Animated.Image
                    style={{
                        position: "absolute",
                        top: imageMarginTop,
                        left: imageMarginLeft,
                        width: imageSize,
                        height: imageSize,
                        borderRadius: 8,
                        backgroundColor: "white",
                    }}
                    source={require("../assets/images/react-logo.png")}
                />
            </Animated.View>

            <ScrollView
                className="flex-1 bg-gray-200 pb-3"
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
            >
                <View style={{ marginTop: HEADER_MAX_HEIGHT }}>
                    <View className="flex mt-5 mx-4 space-y-5">
                        <View className="flex flex-row items-center justify-between w-full">
                            <Text
                                className="text-lg font-bold max-w-[80%]"
                                style={{ lineHeight: 20 }}
                            >
                                {jobDetails?.title || "Job Title"}
                            </Text>
                            <TouchableOpacity className="flex items-center justify-center p-2 rounded-full">
                                <Octicons
                                    name="bookmark"
                                    size={28}
                                    color="black"
                                />
                            </TouchableOpacity>
                        </View>

                        <View className="space-y-1">
                            <Text className="text-gray-600 text-base uppercase">
                                {jobDetails?.company || "Company Name"}
                            </Text>
                            <View className="flex flex-row w-full space-x-5">
                                <Text className="text-gray-600 max-w-[65%]">
                                    {jobDetails?.location ||
                                        "Location, Country"}
                                </Text>
                                <View>
                                    <View className="flex flex-row items-center space-x-2">
                                        <Octicons
                                            name="calendar"
                                            size={16}
                                            color="#4b5563"
                                        />
                                        <Text className="text-gray-600 text-left">
                                            {21} days ago
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View className="flex-1 flex-row flex-wrap justify-between gap-y-3">
                            <View className="w-[48%] bg-white rounded-lg flex flex-row items-center space-x-2 px-3 py-2">
                                <Feather
                                    name="briefcase"
                                    size={20}
                                    color="#0369a1"
                                />
                                <Text className="text-sky-700 text-xs font-bold">
                                    {jobDetails?.employment_type}
                                </Text>
                            </View>
                            <View className="w-[48%] bg-white rounded-lg flex flex-row items-center space-x-2 px-3 py-2">
                                <Feather
                                    name="thumbs-up"
                                    size={20}
                                    color="#0369a1"
                                />
                                <Text className="text-sky-700 text-xs font-bold">
                                    ৳{" "}
                                    {jobDetails?.salary_from &&
                                    jobDetails?.salary_to
                                        ? `${jobDetails?.salary_from} - ${jobDetails?.salary_to}`
                                        : "Negotiable"}
                                </Text>
                            </View>
                            <View className="w-[48%] bg-white rounded-lg flex flex-row items-center space-x-2 px-3 py-2">
                                <Feather
                                    name="globe"
                                    size={20}
                                    color="#0369a1"
                                />
                                <Text className="text-sky-700 text-xs font-bold">
                                    Vacancy: {jobDetails?.number_of_opening}
                                </Text>
                            </View>
                            <View className="w-[48%] bg-white rounded-lg flex flex-row items-center space-x-2 px-3 py-2">
                                <AntDesign
                                    name="carryout"
                                    size={20}
                                    color="#0369a1"
                                />
                                <Text className="text-sky-700 text-xs font-bold">
                                    {jobDetails?.title}
                                </Text>
                            </View>
                            <View className="w-[48%] bg-white rounded-lg flex flex-row items-center space-x-2 px-3 py-2">
                                <Entypo
                                    name="location"
                                    size={20}
                                    color="#0369a1"
                                />
                                <Text className="text-sky-700 text-xs font-bold">
                                    {jobDetails?.location}
                                </Text>
                            </View>
                            <View className="w-[48%] bg-white rounded-lg flex flex-row items-center space-x-2 px-3 py-2">
                                <Entypo
                                    name="stopwatch"
                                    size={18}
                                    color="#0369a1"
                                />
                                <Text className="text-sky-700 text-xs font-bold">
                                    Deadline: {jobDetails?.application_deadline}
                                </Text>
                            </View>
                        </View>

                        <View className="space-y-1">
                            <Text className="text-gray-600 text-lg font-bold">
                                Position Summary
                            </Text>
                            <Text
                                className="text-gray-600 text-base"
                                style={{ lineHeight: 20 }}
                            >
                                {jobDetails?.description || " "}
                            </Text>
                        </View>

                        <View className="space-y-1">
                            <Text className="text-gray-600 text-lg font-bold">
                                Job Requirement
                            </Text>
                            {jobQualification.map((item, index) => (
                                <Text
                                    key={index}
                                    className="text-gray-600 text-base"
                                    style={{ lineHeight: 18 }}
                                >
                                    • {item}
                                </Text>
                            ))}
                        </View>
                    </View>
                </View>

                {/* bottom spacer */}
                <View className="h-24" />
            </ScrollView>

            <View className="absolute bottom-3 w-full">
                <TouchableOpacity
                    className="flex items-center justify-center h-14 bg-sky-700 rounded-lg px-4 py-2 mx-2"
                    activeOpacity={0.9}
                >
                    <Text className="text-white text-center text-lg font-bold">
                        Apply for this job
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default JobDetails;
