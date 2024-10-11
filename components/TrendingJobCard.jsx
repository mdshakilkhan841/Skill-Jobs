import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { useMemo, useState } from "react";
import { useJobStore } from "../store/jobStore";
import TrendingJobCardSkeleton from "./trendingJobCardSkeleton";

const TrendingJobCard = ({ job }) => {
    return (
        <TouchableOpacity
            className="flex flex-row  border border-slate-300 w-72 rounded-lg bg-white p-3 space-x-3"
            activeOpacity={0.5}
        >
            <View className="flex items-center justify-center w-1/5">
                <Image
                    className="h-14 w-14 bg-green-100 rounded-full"
                    source={require("../assets/images/react-logo.png")}
                />
            </View>
            <View className="flex flex-col justify-center w-4/5 space-y-2">
                <Text
                    className="text-lg font-semibold"
                    numberOfLines={2}
                    style={{ lineHeight: 20 }}
                >
                    {job.title || "Full Stack Developer"}
                </Text>
                <View>
                    <Text
                        className="text-gray-600 text-xs font-medium"
                        numberOfLines={1}
                    >
                        {job.company || "Company Name"}
                    </Text>
                    <View className="flex flex-row items-center w-full space-x-1">
                        <Text
                            className="text-gray-600 text-xs w-3/5 font-medium"
                            numberOfLines={1}
                        >
                            {job.location || "Location, Country"}
                        </Text>
                        <Text className="text-gray-600 text-xs text-left font-medium">
                            • {job.daysAgo || 2} days ago{" "}
                        </Text>
                    </View>
                </View>
                <View className="flex flex-row items-center space-x-2">
                    <Text className="text-green-600 font-medium border border-green-600 rounded-full px-[5px] text-center">
                        ৳
                    </Text>
                    <Text className="text-green-600 text-xs font-medium">
                        {job.salary || "Negotiable"}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const TrendingJobList = () => {
    const { totalJobs, isLoading } = useJobStore();
    const [trendingJobs, setTrendingJobs] = useState([]);

    useMemo(() => {
        // Shuffle the totalJobs array and pick the first 3 items
        const shuffledJobs = [...totalJobs].sort(() => 0.5 - Math.random());
        setTrendingJobs(shuffledJobs.slice(0, 3));
    }, [totalJobs]);

    return (
        <View className="flex flex-col mb-3">
            <View className="flex flex-row items-center pt-2 pb-3">
                <Text className="text-black font-medium">Trending Jobs</Text>
            </View>

            <FlatList
                data={trendingJobs}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <TrendingJobCard job={item} />} // Render each job card
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 12 }}
                // Showing skeleton on loading state
                ListFooterComponent={
                    isLoading ? (
                        <View className="flex flex-row" style={{ gap: 12 }}>
                            {Array(3)
                                .fill(null)
                                .map((_, index) => (
                                    <TrendingJobCardSkeleton key={index} />
                                ))}
                        </View>
                    ) : null
                }
            />
        </View>
    );
};

export default TrendingJobList;
