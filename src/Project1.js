import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Project1 = () => {
    return (
        <View style={mystyles.container}>
            <Text style={mystyles.text}>Hello world</Text>
        </View>
    );
};

export default Project1;

const mystyles = StyleSheet.create({
    container: {
        height: 200,
        width: 200,
        backgroundColor: "aqua",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold"
    }
});
