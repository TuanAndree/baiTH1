import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default () => {
    return (
        <View style={mystyles.container}>
            <Button title="Button 1" onPress={() => alert("hello 1")} />
            <TouchableOpacity style={mystyles.Button} onPress={() => alert("hello 2!")}>
                <Text style={mystyles.text}>Button 2</Text>
            </TouchableOpacity>
        </View>
    );
};

const mystyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    Button: {
        backgroundColor: "blue",
        marginTop: 10,
        alignItems: "center",
        padding: 10
    },
    text: {
        color: "white",
        fontSize: 18
    }
});
