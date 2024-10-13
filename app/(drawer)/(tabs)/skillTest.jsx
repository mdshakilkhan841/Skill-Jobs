import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const skillTest = () => {
    return (
        <SafeAreaView className=" h-full">
            <View className="flex flex-col items-center justify-center h-full">
                <Text className="text-lg font-semibold">
                    Welcome to Skill Page
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default skillTest;
