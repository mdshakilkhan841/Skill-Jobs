import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

const CategoryJobs = () => {
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
                <Text className="text-black font-medium">
                    Browse Job by Category
                </Text>
            </View>
            <View className="flex flex-row flex-wrap justify-betwee gap-2.5">
                {category.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        className="bg-white px-4 py-2 rounded-md border border-slate-300"
                        activeOpacity={0.5}
                        onPress={() => {
                            router.push({
                                pathname: "searchJobs",
                                params: { text: item.name }, // Pass parameters here
                            });
                        }}
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

export default CategoryJobs;
