import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="aiResume" options={{ title: "AI Page" }} />
            <Stack.Screen name="moreService" options={{ title: "More Service Page" }} />
            <Stack.Screen name="viewAllJobs" options={{ title: "View All Jobs Page" }} />
        </Stack>
    );
}
