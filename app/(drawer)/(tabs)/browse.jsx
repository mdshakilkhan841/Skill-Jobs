import { View, TouchableOpacity, TextInput, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Octicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useJobStore } from "../../../store/jobStore";
import JobsCount from "../../../components/JobsCount";
import DetailJobCard from "../../../components/DetailJobCard";
import { router } from "expo-router";
import DetailJobCardSkeleton from "../../../components/skeleton/DetailJobCardSkeleton";

const browse = () => {
    const [inputText, setInputText] = useState("");
    const { totalJobs, getNewJobs, isLoading, next_cursor } = useJobStore();

    // Function to fetch more jobs when scrolling to the bottom
    const handleLoadMoreJobs = () => {
        if (!isLoading && next_cursor) {
            getNewJobs(); // Fetch more jobs only if not loading and next_cursor is available
        }
    };

    return (
        <SafeAreaView className="bg-sky-500 h-full">
            {/* Header */}
            <View className="flex flex-row h-10 items-center justify-between mt-3 mb-5">
                <TouchableOpacity
                    className="flex items-center justify-center h-full px-4 rounded-full"
                    activeOpacity={0.6}
                    onPress={() => router.back()}
                >
                    <Octicons name="arrow-left" size={28} color="white" />
                </TouchableOpacity>
                <View className="flex flex-row items-center justify-between h-9 w-8/12 px-3 rounded-lg bg-white">
                    <TextInput
                        className="h-full w-11/12"
                        placeholder="Job title, keyword or Company"
                        cursorColor={"black"}
                        value={inputText}
                        onChangeText={setInputText}
                    />
                    <TouchableOpacity
                        className="px-2 h-full flex items-center justify-center"
                        activeOpacity={0.6}
                        onPress={() => setInputText("")}
                    >
                        <Octicons name="x" size={24} color="#94a3b8" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    className="flex items-center justify-center px-4 h-full"
                    activeOpacity={0.6}
                >
                    <Octicons name="multi-select" size={26} color="white" />
                </TouchableOpacity>
            </View>

            {/* Body */}
            <View className="flex-1 bg-gray-100 px-3 pb-3">
                <FlatList
                    data={totalJobs}
                    keyExtractor={(item) => item.id + Math.random().toString()}
                    renderItem={({ item }) => <DetailJobCard job={item} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ gap: 12 }}
                    ListHeaderComponent={<JobsCount />}
                    ListFooterComponent={
                        isLoading ? (
                            <View className="flex" style={{ gap: 12 }}>
                                {Array(3)
                                    .fill(null)
                                    .map((_, index) => (
                                        <DetailJobCardSkeleton key={index} />
                                    ))}
                            </View>
                        ) : null
                    }
                    // Trigger function when the user scrolls to the end
                    onEndReached={handleLoadMoreJobs}
                    // onEndReachedThreshold={0.5} // Fetch more jobs when 50% of the last item is visible
                />
            </View>
        </SafeAreaView>
    );
};

export default browse;
