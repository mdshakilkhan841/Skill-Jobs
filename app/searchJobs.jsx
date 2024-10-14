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
import { useJobStore } from "../store/jobStore";
import JobsCount from "../components/JobsCount";
import DetailJobCard from "../components/DetailJobCard";
import { useLocalSearchParams, router } from "expo-router";
import DetailJobCardSkeleton from "../components/skeleton/DetailJobCardSkeleton";

const PopularSearch = ({ setInputText }) => {
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
        <View className="flex flex-col mb-6">
            <View className="flex flex-row items-center pt-2 pb-3">
                <Text className="text-black font-medium">Popular Searches</Text>
            </View>
            <View className="flex flex-row flex-wrap justify-center gap-2.5">
                {category.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        className="bg-white px-4 py-2 rounded-md border border-slate-300"
                        activeOpacity={0.5}
                        onPress={() => setInputText(item.name)}
                    >
                        <Text className="text-gray-600 text-sm font-medium">
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const searchJobs = () => {
    const { text } = useLocalSearchParams();

    const [inputText, setInputText] = useState(text ?? "");
    const [searchLoading, setSearchLoading] = useState(false);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const { totalJobs } = useJobStore();

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
                <JobsCount />
                {searchLoading ? (
                    <View className="flex" style={{ gap: 12 }}>
                        {Array(5)
                            .fill(null)
                            .map((_, index) => (
                                <DetailJobCardSkeleton key={index} />
                            ))}
                    </View>
                ) : filteredJobs.length === 0 && inputText.length === 0 ? (
                    <PopularSearch setInputText={setInputText} />
                ) : filteredJobs.length === 0 ? (
                    <Text className="text-center text-lg font-semibold py-20">
                        No Jobs Found
                    </Text>
                ) : (
                    <FlatList
                        data={filteredJobs}
                        keyExtractor={(item) =>
                            item.id + Math.random().toString()
                        }
                        renderItem={({ item }) => <DetailJobCard job={item} />}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ gap: 12 }}
                    />
                )}
            </View>
        </SafeAreaView>
    );
};

export default searchJobs;
