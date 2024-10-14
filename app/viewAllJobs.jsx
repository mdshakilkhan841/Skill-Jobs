import { View, FlatList, SafeAreaView } from "react-native";
import { useJobStore } from "../store/jobStore";
import DetailJobCard from "../components/DetailJobCard";
import DetailJobCardSkeleton from "../components/skeleton/DetailJobCardSkeleton";

const viewAllJobs = () => {
    const { totalJobs, getNewJobs, next_cursor, isLoading } = useJobStore();

    const handleLoadMoreJobs = () => {
        if (!isLoading && next_cursor) {
            getNewJobs();
        }
    };

    return (
        <SafeAreaView className="flex h-full">
            {/* Body */}
            <View className="flex bg-gray-100 px-3 pb-3">
                <FlatList
                    className="pt-3"
                    data={totalJobs}
                    keyExtractor={(item) => item.id + Math.random().toString()}
                    renderItem={({ item }) => <DetailJobCard job={item} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ gap: 12 }}
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
                    onEndReached={handleLoadMoreJobs}
                    // onEndReachedThreshold={0.5} // Fetch more jobs when 50% of the last item is visible
                />
            </View>
        </SafeAreaView>
    );
};

export default viewAllJobs;
