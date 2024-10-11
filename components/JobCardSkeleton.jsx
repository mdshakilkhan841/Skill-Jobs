import { useEffect, useRef } from "react";
import { View, Animated } from "react-native";

const JobCardSkeleton = () => {
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
            className="border border-slate-300 h-60 w-52 rounded-lg bg-white p-3 space-y-2.5"
            style={animatedStyle}
        >
            {/* Image and Level Placeholder */}
            <View className="flex flex-row items-center justify-between space-x-2">
                <View className="h-10 w-10 bg-slate-200 rounded-full" />
                <View className="w-20 bg-slate-200 rounded-full h-5" />
            </View>

            {/* Job Title Placeholder */}
            <View className="bg-slate-200 h-10 w-full rounded-md" />

            {/* Company and Location Placeholder */}
            <View>
                <View className="bg-slate-200 h-4 w-full mb-1 rounded-md" />
                <View className="flex flex-row items-center w-full space-x-1">
                    <View className="bg-slate-200 h-4 w-3/5 rounded-md" />
                    <View className="bg-slate-200 h-4 w-14 rounded-md" />
                </View>
            </View>

            {/* Salary Placeholder */}
            <View className="flex flex-row items-center space-x-2">
                <View className="bg-slate-200 h-6 w-6 rounded-full" />
                <View className="bg-slate-200 h-4 w-24 rounded-md" />
            </View>

            {/* Apply Button Placeholder */}
            <View className="bg-slate-200 h-8 w-full rounded-full" />
        </Animated.View>
    );
};

export default JobCardSkeleton;
