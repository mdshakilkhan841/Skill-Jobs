import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { useJobStore } from "../store/jobStore";

const CategoryJobs = () => {
    const { jobCategory } = useJobStore();
    const defaultCategory = [
        "Manufacturer",
        "Software Development",
        "Education, Tanning and Development",
        "IT Services and IT Consulting",
        "Creative",
        "React Developer",
        "Faculty Member",
    ];

    const categories = jobCategory.length > 0 ? jobCategory : defaultCategory;

    return (
        <View className="flex flex-col mb-6">
            <View className="flex flex-row items-center pt-2 pb-3">
                <Text className="text-black font-medium">
                    Browse Job by Category
                </Text>
            </View>
            <View className="flex flex-row flex-wrap justify-center gap-2.5">
                {categories.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        className="bg-white px-4 py-2 rounded-md border border-slate-300"
                        activeOpacity={0.5}
                        onPress={() => {
                            router.push({
                                pathname: "searchJobs",
                                params: { text: item },
                            });
                        }}
                    >
                        <Text className="text-gray-600 text-sm font-medium">
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default CategoryJobs;
