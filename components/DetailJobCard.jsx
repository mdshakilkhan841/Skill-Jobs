import { Octicons } from "@expo/vector-icons";
import { useMemo } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
const DetailJobCard = ({ job }) => {
    const jobLevels = ["Beginner", "Mid Label", "Expert"];

    const randomJobLevel = useMemo(() => {
        const randomIndex = Math.floor(Math.random() * jobLevels.length);
        return jobLevels[randomIndex];
    }, []);

    return (
        <TouchableOpacity
            className="flex  border border-slate-300 w-full rounded-lg bg-white p-3 space-y-2"
            activeOpacity={0.6}
        >
            <View className="flex flex-row w-full space-x-2">
                <View className="flex items-center justify-center">
                    <Image
                        className="h-14 w-14 bg-green-100 rounded-full"
                        source={require("../assets/images/react-logo.png")}
                    />
                </View>
                <View className="flex flex-col w-[70%] space-y-1.5">
                    <Text className="text-sky-400 text-xs" numberOfLines={1}>
                        {job?.company || "Company Name"}
                    </Text>
                    <Text
                        className="text-base font-bold"
                        numberOfLines={2}
                        style={{ lineHeight: 20 }}
                    >
                        {job?.title || "Full Stack Developer"}
                    </Text>

                    <View className="flex flex-row items-center w-full space-x-2">
                        <View className="flex flex-row items-center space-x-1 max-w-[70%]">
                            <Octicons
                                name="location"
                                size={12}
                                color="#4b5563"
                            />
                            <Text
                                className="text-gray-600 text-xs"
                                numberOfLines={1}
                            >
                                {job?.location || "Location, Country"}
                            </Text>
                        </View>
                        <View className="flex flex-row items-center space-x-1">
                            <Octicons
                                name="calendar"
                                size={12}
                                color="#4b5563"
                            />
                            <Text className="text-gray-600 text-xs text-left">
                                {job?.daysAgo || 21} days ago
                            </Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity className="absolute -right-3 -top-2 px-3 py-2 rounded-full">
                    <Octicons name="bookmark" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View className="flex flex-row w-full space-x-2">
                <View className={`flex w-16 rounded-full py-0.5 bg-gray-200`}>
                    <Text className="text-center text-xs text-slate-700">
                        {"Full Time"}
                    </Text>
                </View>
                <View
                    className={`flex w-16 rounded-full py-0.5 ${
                        randomJobLevel === "Beginner"
                            ? "bg-green-400"
                            : randomJobLevel === "Mid Label"
                            ? "bg-violet-400"
                            : "bg-orange-400"
                    }`}
                >
                    <Text className="text-center text-xs text-slate-700">
                        {randomJobLevel || "Mid Label"}
                    </Text>
                </View>
                <View className="flex flex-row items-center space-x-2">
                    <View className="border border-green-600 rounded-full px-[4px]">
                        <Text className="text-xs text-green-600 font-medium">
                            ৳
                        </Text>
                    </View>
                    <Text className="text-green-600 text-xs font-medium">
                        {job?.salary_from && job?.salary_to
                            ? `${job.salary_from} - ${job.salary_to}`
                            : "Negotiable"}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default DetailJobCard;
