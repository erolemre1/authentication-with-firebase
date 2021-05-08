import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

class Spinner extends Component {
  render() {
    return (
      <View style={[styles.container]}>
      
         <ActivityIndicator size="large" color="#00C9C9" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"

  },
  
  
});



export { Spinner }
