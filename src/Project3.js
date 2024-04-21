import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = (props) => (
    <TouchableOpacity
        onPress={props.onPress}
        style={{
            backgroundColor: "#ff637c",
            alignSelf: "center",
            padding: 10,
            margin: 10,
            ...props.ButtonStyle,
        }}
    >
        <Text style={{ color: "#fff" }}>{props.text}</Text>
    </TouchableOpacity>
);

export default () => (
    <View style={{ flex: 1, justifyContent: "center" }}>
        <Button text="say hello" onPress={() => alert("hello!")} />
        <Button
            text="say goodbye"
            onPress={() => alert("goodbye!")}
            ButtonStyle={{ backgroundColor: "#4dc2c2" }}
        />
    </View>
);
