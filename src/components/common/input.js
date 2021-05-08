import React from "react";
import {Text, View, TextInput, StyleSheet} from "react-native"; 


const Input = ({ text, inputPlaceHolder, onChangeText, value, secureTextEntry}) => {
    const {inputWrapper, inputStyle, textStyle}= styles;
    return(
<View style ={styles.inputWrapper}>
<Text style ={textStyle}>  {text}
</Text>

<TextInput style={inputStyle}
secureTextEntry ={secureTextEntry}
placeholder={inputPlaceHolder}
onChangeText={onChangeText}
value={value}
/>


</View>
    ) 
}
 const styles= StyleSheet.create ({
     inputWrapper:{
         flexDirection : "row",
         height: 90,
         width:"auto",
         borderColor:"#455357",
         borderBottomWidth: 1,
         alignItems: "center",
         
         
     },
     textStyle :{
        fontWeight:"bold",
        fontSize:25,
        flexGrow:1
        
     },
     inputStyle:{
         fontSize:20,
      flexGrow:2

     }

 })
 
export {Input };