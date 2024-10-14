import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
            <Stack.Screen
                name="viewAllJobs"
                options={{
                    headerShown: true,
                    title: "Recent Opening",
                    headerTitleAlign: "center",
                }}
            />
            <Stack.Screen
                name="searchJobs"
                options={{
                    headerShown: false,
                    title: "Search Jobs",
                    headerTitleAlign: "center",
                }}
            />
            <Stack.Screen
                name="jobDetails"
                options={{
                    headerShown: false,
                    title: "Job Details",
                    headerTitleAlign: "center",
                }}
            />
        </Stack>
    );
}
