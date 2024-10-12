import { useEffect, useRef } from "react";
import { View, Animated } from "react-native";

const TrendingJobCardSkeleton = () => {
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
            className="flex flex-row border border-slate-300 w-72 rounded-lg bg-white p-3 space-x-3"
            style={animatedStyle}
        >
            {/* Image Placeholder */}
            <View className="flex items-center justify-center w-1/5">
                <View className="h-14 w-14 bg-slate-200 rounded-full" />
            </View>

            {/* Text Placeholders */}
            <View className="flex flex-col justify-center w-4/5 space-y-2">
                {/* Title Placeholder */}
                <View className="bg-slate-200 h-10 rounded-md mr-3" />

                {/* Company and Location Placeholder */}
                <View className="space-y-1">
                    <View className="bg-slate-200 h-4 w-24 rounded-md" />
                    <View className="flex flex-row items-center w-full space-x-2">
                        <View className="bg-slate-200 h-4 w-3/5 rounded-md" />
                        <View className="bg-slate-200 h-4 w-16 rounded-md" />
                    </View>
                </View>

                {/* Salary Placeholder */}
                <View className="flex flex-row items-center space-x-2">
                    <View className="bg-slate-200 h-6 w-6 rounded-full" />
                    <View className="bg-slate-200 h-4 w-24 rounded-md" />
                </View>
            </View>
        </Animated.View>
    );
};

export default TrendingJobCardSkeleton;
