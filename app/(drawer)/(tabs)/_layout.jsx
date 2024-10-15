import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Foundation from "@expo/vector-icons/Foundation";
import Octicons from "@expo/vector-icons/Octicons";
import { Tabs, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
    const router = useRouter();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#0284c7",
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
                tabBarButton: (props) => {
                    const isActive = props.accessibilityState.selected;
                    return (
                        <TouchableOpacity
                            {...props}
                            activeOpacity={0.6}
                            className={isActive && "border-b-4 border-sky-600"}
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: isActive
                                    ? "rgb(216, 249, 254)"
                                    : "transparent",
                                borderRadius: 5,
                                marginHorizontal: 10,
                                paddingVertical: 5,
                                marginBottom: 5,
                            }}
                        />
                    );
                },
            }}
        >
            <Tabs.Screen
                name="index"
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
                            {/* <MaterialCommunityIcons
                                name="star-shooting-outline"
                                size={30}
                                color="white"
                            /> */}
                            <FontAwesome6
                                name="wand-magic-sparkles"
                                size={24}
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
