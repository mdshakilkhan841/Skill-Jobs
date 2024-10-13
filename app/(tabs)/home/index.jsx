import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import JobsCount from "../../../components/JobsCount";
import JobList from "../../../components/JobCard";
import TrendingJobList from "../../../components/TrendingJobCard";
import SponsorSection from "../../../components/SponsorSection";
import CategoryJobs from "../../../components/CategoryJobs";

import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

const index = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView className="bg-sky-500 h-full">
            {/* Header */}
            <View className="flex flex-row h-10 items-center justify-between mt-3 mb-2">
                <View className="flex flex-row items-center justify-center h-full ">
                    <TouchableOpacity
                        className="flex items-center justify-center h-full px-4 rounded-full"
                        activeOpacity={0.6}
                        onPress={() =>
                            navigation.dispatch(DrawerActions.openDrawer())
                        }
                    >
                        <Octicons name="three-bars" size={28} color="white" />
                    </TouchableOpacity>
                    <Text className="text-white text-base font-semibold px-3">
                        Find Your Dream Jobs
                    </Text>
                </View>
                <TouchableOpacity className="flex items-center justify-center px-4 h-full">
                    <Image
                        className="h-10 w-10 bg-white rounded-full"
                        source={require("../../../assets/images/react-logo.png")}
                    />
                </TouchableOpacity>
            </View>

            {/* Search Bar */}
            <View className="mx-4 py-3">
                <TouchableOpacity
                    className="flex flex-row items-center bg-sky-400 border border-slate-200 rounded px-4 h-10 space-x-5"
                    activeOpacity={0.6}
                    onPress={() => router.push("/searchJobs")}
                >
                    <View className="flex items-center justify-center">
                        <Octicons name="search" size={24} color="white" />
                    </View>
                    <Text className="text-white text-sm font-semibold">
                        Search Jobs
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Body */}
            <ScrollView
                className="flex-1 bg-gray-100 px-3"
                showsVerticalScrollIndicator={false}
            >
                {/* Count Section */}
                <JobsCount />

                {/* Job Section */}
                <JobList />

                {/* Trending Job Section */}
                <TrendingJobList />

                {/* Sponsor Section */}
                <SponsorSection />

                {/* Category Section */}
                <CategoryJobs />
            </ScrollView>
        </SafeAreaView>
    );
};

export default index;
