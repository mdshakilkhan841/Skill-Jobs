import { View, Text, StyleSheet } from "react-native";
import React from "react";

const more = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>more</Text>
        </View>
    );
};

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

export default more;
