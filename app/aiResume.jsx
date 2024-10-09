// app/aiPage.js (or wherever your stack pages are defined)
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AiPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the AI Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    text: {
        fontSize: 24,
        color: "black",
    },
});
