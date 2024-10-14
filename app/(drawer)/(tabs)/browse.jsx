import {
    View,
    TouchableOpacity,
    TextInput,
    FlatList,
    Text,
} from "react-native";
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
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [searchLoading, setSearchLoading] = useState(false);
    const { totalJobs, getNewJobs, isLoading, next_cursor } = useJobStore();

    const handleLoadMoreJobs = () => {
        if (!isLoading && next_cursor) {
            getNewJobs();
        }
    };

    useEffect(() => {
        if (inputText.length > 0) {
            setSearchLoading(true);
            const debounceTimeout = setTimeout(() => {
                const filtered = totalJobs.filter((job) => {
                    // Parse qualifications from JSON string to array
                    const qualificationsArray = JSON.parse(job.qualifications);

                    return (
                        job.title
                            .toLowerCase()
                            .includes(inputText?.toLowerCase()) ||
                        job.company
                            .toLowerCase()
                            .includes(inputText?.toLowerCase()) ||
                        job.job_category
                            .toLowerCase()
                            .includes(inputText?.toLowerCase()) ||
                        qualificationsArray.some((q) =>
                            q.toLowerCase().includes(inputText?.toLowerCase())
                        )
                    );
                });

                setFilteredJobs(filtered);
                setSearchLoading(false);
            }, 300);

            // Cleanup function to clear the timeout if input changes quickly
            return () => clearTimeout(debounceTimeout);
        } else {
            setFilteredJobs([]);
            setSearchLoading(false);
        }
    }, [inputText]);

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
                {searchLoading ? (
                    <View className="flex mt-3" style={{ gap: 12 }}>
                        {Array(6)
                            .fill(null)
                            .map((_, index) => (
                                <DetailJobCardSkeleton key={index} />
                            ))}
                    </View>
                ) : filteredJobs.length === 0 && inputText.length > 0 ? (
                    <Text className="text-center text-lg font-semibold py-20">
                        No Jobs Found
                    </Text>
                ) : (
                    <FlatList
                        data={filteredJobs.length ? filteredJobs : totalJobs}
                        keyExtractor={(item) =>
                            item.id + Math.random().toString()
                        }
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
                                            <DetailJobCardSkeleton
                                                key={index}
                                            />
                                        ))}
                                </View>
                            ) : null
                        }
                        onEndReached={handleLoadMoreJobs}
                        // onEndReachedThreshold={0.5} // Fetch more jobs when 50% of the last item is visible
                    />
                )}
            </View>
        </SafeAreaView>
    );
};

export default browse;
