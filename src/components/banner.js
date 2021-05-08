import React, {Component} from "react";
import {Text, View, StyleSheet} from "react-native";


class Banner extends Component {
    render() {
        return (
            <View style={styles.bannerContainer}>
            <Text style={styles.bannerText}> {this.props.Text} </Text>
     </View>

        )
    }
}


const styles = StyleSheet.create({
    bannerContainer: {
width : "auto",
height: 200,
backgroundColor: "#3FFF8C",
justifyContent :"center",
alignItems: "center",


    },
    bannerText :{
         color : "white",
         fontSize:45,
        fontWeight:"bold",
        
    }
})


export default Banner;