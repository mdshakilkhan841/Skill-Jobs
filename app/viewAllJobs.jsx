import { View, FlatList, SafeAreaView } from "react-native";
import { useJobStore } from "../store/jobStore";
import DetailJobCard from "../components/DetailJobCard";
import TrendingJobCardSkeleton from "../components/skeleton/TrendingJobCardSkeleton";

const viewAllJobs = () => {
    const { totalJobs, isLoading } = useJobStore();

    return (
        <SafeAreaView className="flex h-full">
            {/* Body */}
            <View className="flex bg-gray-100 px-3">
                <FlatList
                    className="pt-3"
                    data={totalJobs}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <DetailJobCard job={item} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ gap: 12 }}
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
        </SafeAreaView>
    );
};

export default viewAllJobs;
