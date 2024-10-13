import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
                <Drawer.Screen
                    name="(tabs)"
                    options={{
                        headerShown: false,
                        drawerLabel: "Home",
                        title: "Find Your Dream Jobs",
                    }}
                />
                <Drawer.Screen
                    name="settings"
                    options={{
                        headerShown: false,
                        drawerLabel: "Settings",
                        title: "Find Your Dream Jobs",
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}
