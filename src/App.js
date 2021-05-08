import React, {Component} from "react";
import {Text, View, StyleSheet, Button} from "react-native";
import firebase from "firebase";
import Banner from "./components/banner";
import LoginForm from "./components/loginform";
import {Spinner} from "./components/common"

class App extends Component {
state ={
    LoggedIn : null
}


    componentDidMount(){
        firebase.initializeApp({
            apiKey: env.API_KEY,
            authDomain: env.authDomain,
            projectId: env.projectId,
            storageBucket: env.storageBucket,
            messagingSenderId: env.messagingSenderId,
            appId: env.appId,
            measurementId: env.measurementId,
          });
          firebase.auth().onAuthStateChanged((user )=> {
              const LoggedIn = user ? true : false;
              this.setState({
                  LoggedIn : LoggedIn
              })
          })
    }
renderContent() {
    const {LoggedIn} = this.state;
    switch (LoggedIn) {
        case true:  return (
            
            <Button onPress= {()=>firebase.auth().signOut()}
             title= "ÇIKIŞ"  color="#44A7BF"/>
        ) 
        

    case false: return (
        <LoginForm />
     )
        
    
        default: 
        return (
            <Spinner />
        )

    
    }
}

    render() {
        return(
            <View style={styles.appContainer}>
                
                <Banner Text= "Authentication App"/>
                {this.renderContent()}
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    appContainer :{
        backgroundColor :"#D0DCE0",
        flex : 1,
    }
})
export default App;