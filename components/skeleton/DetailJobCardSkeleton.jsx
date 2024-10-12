import { useEffect, useRef } from "react";
import { View, Animated } from "react-native";

const DetailJobCardSkeleton = () => {
    const pulseAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const startPulse = () => {
            pulseAnimation.setValue(0);
            Animated.loop(
                Animated.sequence([
                    Animated.timing(pulseAnimation, {
                        toValue: 1,
                        duration: 800,
                        useNativeDriver: true,
                    }),
                    Animated.timing(pulseAnimation, {
                        toValue: 0,
                        duration: 800,
                        useNativeDriver: true,
                    }),
                ])
            ).start();
        };

        startPulse();
    }, [pulseAnimation]);

    const animatedStyle = {
        opacity: pulseAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 1],
        }),
    };

    return (
        <Animated.View
            className="flex border border-slate-300 w-full rounded-lg bg-white p-3 space-y-2"
            style={animatedStyle}
        >
            {/* First Row (Image, Company info, Bookmark Icon) */}
            <View className="flex flex-row w-full space-x-2">
                {/* Image Skeleton */}
                <View className="h-14 w-14 bg-gray-200 rounded-full" />
                {/* Company Info Skeleton */}
                <View className="flex flex-col w-[70%] space-y-2">
                    <View className="h-3 w-24 bg-gray-200 rounded-full" />
                    <View className="h-4 w-40 bg-gray-200 rounded-full" />
                    <View className="flex flex-row items-center w-full space-x-2">
                        <View className="h-3 w-32 bg-gray-200 rounded-full" />
                        <View className="h-3 w-16 bg-gray-200 rounded-full" />
                    </View>
                </View>
                {/* Bookmark Icon Skeleton */}
                <View className="h-6 w-5 bg-gray-200 rounded" />
            </View>

            {/* Job Details (Full-time, Job Level, Salary) */}
            <View className="flex flex-row w-full space-x-2">
                {/* Full Time Tag Skeleton */}
                <View className="h-5 w-16 bg-gray-200 rounded-full" />
                {/* Job Level Tag Skeleton */}
                <View className="h-5 w-16 bg-gray-200 rounded-full" />
                {/* Salary Info Skeleton */}
                <View className="flex flex-row items-center space-x-2">
                    <View className="h-4 w-4 bg-gray-200 rounded-full" />
                    <View className="h-3 w-20 bg-gray-200 rounded-full" />
                </View>
            </View>
        </Animated.View>
    );
};

export default DetailJobCardSkeleton;
