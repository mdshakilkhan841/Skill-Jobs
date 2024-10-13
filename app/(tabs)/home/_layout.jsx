import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
                <Drawer.Screen
                    name="index"
                    options={{
                        headerShown: false,
                        drawerLabel: "Home",
                        title: "Find Your Dream Jobs",
                        headerTitleStyle: {
                            fontSize: 16,
                            color: "white",
                        },
                        headerStyle: {
                            backgroundColor: "#0ea5e9",
                        },
                        headerTintColor: "white",
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}
