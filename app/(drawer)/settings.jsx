import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const settings = () => {
    return (
        <SafeAreaView className=" h-full">
            <View className="flex flex-col items-center justify-center h-full">
                <Text className="text-lg font-semibold">
                    Settings
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default settings;
