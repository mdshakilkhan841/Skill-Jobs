import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Foundation from "@expo/vector-icons/Foundation";
import Octicons from "@expo/vector-icons/Octicons";
import { Tabs, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function TabLayout() {
    const router = useRouter();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "red",
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                tabBarItemStyle: {
                    marginBottom: 12,
                },
                tabBarStyle: {
                    height: 65,
                    paddingTop: 5,
                },
                
                tabBarButton: (props) => (
                    <TouchableOpacity {...props} activeOpacity={0.6} />
                ),
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <Octicons name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="browse"
                options={{
                    title: "Browse",
                    tabBarIcon: ({ color }) => (
                        <Octicons name="stack" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="ai"
                options={{
                    title: "",
                    tabBarButton: (props) => (
                        <TouchableOpacity
                            activeOpacity={0.6}
                            {...props}
                            onPress={() => {
                                router.push("/aiResume");
                            }}
                            className="flex items-center justify-center bg-sky-500 rounded-full p-2 h-14 w-14"
                            style={{
                                position: "relative",
                                bottom: 15,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 3,
                                },
                                shadowOpacity: 0.29,
                                shadowRadius: 4.65,
                                elevation: 4,
                            }}
                        >
                            <MaterialCommunityIcons
                                name="star-shooting-outline"
                                size={30}
                                color="white"
                            />
                        </TouchableOpacity>
                    ),
                }}
                listeners={{
                    tabPress: (e) => {
                        e.preventDefault();
                    },
                }}
            />
            <Tabs.Screen
                name="skillTest"
                options={{
                    title: "Skill Test",
                    tabBarIcon: ({ color }) => (
                        <Foundation
                            name="social-skillshare"
                            size={30}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="more"
                options={{
                    title: "More",
                    tabBarIcon: ({ color }) => (
                        <Octicons name="apps" size={24} color={color} />
                    ),
                    tabBarButton: (props) => (
                        <TouchableOpacity
                            activeOpacity={0.6}
                            {...props}
                            onPress={() => {
                                router.push("/moreService");
                            }}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
