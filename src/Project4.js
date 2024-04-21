import {View, Text, styleSheet} from "react-native"

const Project1 = ()=>{
    return(
        <View style={myStyles.text}>
            <Text style={myStyles.text}>Hello word </Text>
        </View>
    )
}

export default Project1

const mystyles = styleSheet.create({
    container:{
        height: 200,
        width: 200,
        backgroundColor: "auqa",
        justifyContent: "center",
        allgnItems: "center"

    },
    text:{
        fontSize:20,
        fontweight: "bold"
    }
}
)
