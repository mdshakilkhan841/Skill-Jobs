import { View, Text } from "react-native";
import AnimatedNumbers from "react-native-animated-numbers";
import { useEffect, useState } from "react";

const JobsCount = () => {
    const [jobStats, setJobStats] = useState({
        liveJobs: 0,
        companies: 0,
        newJobs: 0,
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setJobStats({
                liveJobs: Math.floor(Math.random() * 10000),
                companies: Math.floor(Math.random() * 10000),
                newJobs: Math.floor(Math.random() * 10000),
            });
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View className="flex flex-row items-center justify-center bg-white my-3 rounded-lg py-2 border border-slate-300 divide-x divide-slate-300">
            <View className="flex items-center px-5">
                <AnimatedNumbers
                    animateToNumber={jobStats.liveJobs}
                    fontStyle={{
                        fontSize: 18,
                        lineHeight: 20,
                        fontWeight: "bold",
                        color: "#1e40af",
                    }}
                />
                <Text className="text-black font-medium">Live Jobs</Text>
            </View>
            <View className="flex items-center px-5">
                <AnimatedNumbers
                    animateToNumber={jobStats.companies}
                    fontStyle={{
                        fontSize: 18,
                        lineHeight: 20,
                        fontWeight: "bold",
                        color: "#1e40af",
                    }}
                />
                <Text className="text-black font-medium">Companies</Text>
            </View>
            <View className="flex items-center px-5">
                <AnimatedNumbers
                    animateToNumber={jobStats.newJobs}
                    fontStyle={{
                        fontSize: 18,
                        lineHeight: 20,
                        fontWeight: "bold",
                        color: "#1e40af",
                    }}
                />
                <Text className="text-black font-medium">New Jobs</Text>
            </View>
        </View>
    );
};

export default JobsCount;
