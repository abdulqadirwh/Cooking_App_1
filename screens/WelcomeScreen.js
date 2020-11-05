import React, { Component } from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Alert,
    ScrollView,
    Modal
  } from 'react-native';
  import db from '../config';
  import firebase from 'firebase';

export default class WelcomeScreen extends Component{
    constructor() {
     super();
    this.state={
        emailId:'',
        password:'',
        confirmPassword:'',
        isModalVisible: 'false'
    }
    }
    showModal = () => {
      return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.isModalVisible}>
          <View style = {Styles.modalcontainer}>
        <ScrollView style = {{width: '100%'}}>
        <KeyboardAvoidingView style ={Styles.keyboard}>
          <TextInput
          style = {Styles.inputBox}
          placeholder = {"First name"}
          maxLength = {8}
          onChangeText = {()=>{
this.this.setState({
firstName: text
})
          }}
          />
          <TextInput
          style = {Styles.inputBox}
          placeholder = {"Last name"}
          maxLength = {8}
          onChangeText = {()=>{
this.this.setState({
lastName: text
})
          }}
          />
          <TextInput
          style = {Styles.inputBox}
          placeholder = {"abc@example.com"}
          maxLength = {8}
          onChangeText = {()=>{
this.this.setState({
emailId: text
})
          }}
          />
          </KeyboardAvoidingView>
          </ScrollView>
          </View>
          </Modal>
          )
      }
    
    userSignIn=(emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(() => {
          Alert.alert("login Succesful");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
  
     }

     showModal

render(){
    return(
        <View style={Styles.container}>
           {
            this.showModal()
          }
            <TextInput
            style={Styles.loginBox}
            placeholder="abc@example.com"
            placeholderTextColor="gray"
            keyboardType = 'email-address'
            onChangeText={
             (text)=>{
               this.setState({
                    emailId:text
               })
             }
            }
            />
              
              <TextInput
            style={Styles.loginBox}
            placeholder="password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            onChangeText={
             (text)=>{
               this.setState({
                   password:text
               })
             }
            }
            />

            <TouchableOpacity 
            style={Styles.signIn}
            onPress={
            ()=>{this.userSignIn(this.state.emailId,this.state.password)
            }}
            >
                <Text> Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={Styles.signUp}
            onPress={
            ()=>{
                this.setState({isModalVisible:true})
            }}>
                <Text> Sign Up</Text>
            </TouchableOpacity>  

     </View>
    )
}
}

const Styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#6fc0b8",
          },
    
    loginBox:{
        width:300,
        height:40,
        fontSize:20,
        margin:10
    },
    signIn:{
      width:300,
      height:40,
      fontSize:20,
      margin:10
  },
  signUp:{
    width:300,
    height:40,
    fontSize:20,
    margin:10
},
inputBox:{
  width:300,
  height:40,
  fontSize:20,
  margin:10
}
})