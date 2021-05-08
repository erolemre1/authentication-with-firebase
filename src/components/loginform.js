import React, {Component} from "react";
import {Text, View, Button, StyleSheet} from "react-native";
import firebase from "firebase";    
import {Input, Spinner } from "./common";


class LoginForm extends Component {
    state={ 
        email: "",
        şifre: "",
        error :"Email ve Şifre giriniz.",
        loading : false
    }
    onButtonCliked (){
        const { email , şifre} = this.state; 
        this.setState({
           error: "Giriş Yapılıyor.",
           loading: true
        })
        firebase.auth().signInWithEmailAndPassword(email, şifre)
        .then(this.onLoginSuccess.bind(this))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email, şifre)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFaild.bind(this));
         });
    }

    onLoginSuccess() {
        this.setState({
            email: "",
            şifre: "",
            error : "",
            loading : false
                         
        })
    }
    onLoginFaild(){
        this.setState({
            error: "Giriş Başarısız.",
            loading: false
        });

    }
    render() {
        const{error, loading} = this.state
        const errorMsg = error ? (
            <Text style = {styles.errorText}>
                {error}
            </Text>
        ): null;
        const loginButton = loading ?(
        <Spinner />
       ): (
                   <Button onPress={this.onButtonCliked.bind(this)}
                     color="#44A7BF" 
                      title = "GİRİŞ"/> 
       ); 
        return(
<View style ={{padding:20}}>
    <View>
        <Input text="Email " inputPlaceHolder = "Email Giriniz"
        onChangeText={(text)=> {
this.setState({
    email: text
})
        }}
         
        value={this.state.email}/>
         
    </View>
 <View>


 <Input text="Şifre " inputPlaceHolder = "Şifre Giriniz"
        onChangeText={(text)=> {
this.setState({
    
    şifre: text
})
        }}
        secureTextEntry
        value={this.state.şifre}/>
 
     </View>
     {errorMsg}
     <View style = {styles.buttonWrapper}>
         {loginButton}
     </View>
     </View>
        )
    }
}
const styles= StyleSheet.create( {
    buttonWrapper:{
        backgroundColor:"blue",
        marginTop:30,
        borderRadius:15,
        

        
        
    },
    errorText: {
        color: "red",
        fontSize:20,
        fontWeight:"bold",
        paddingTop:30,
        alignSelf:"center",


    }
})
export default LoginForm;