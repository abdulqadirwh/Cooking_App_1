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
import { render } from 'react-dom';

  export default class UserSearchScreen extends Component{
      constructor(){

      }
      render(){
        return(
         <View>
             <TextInput
             style = {Styles.search}
             placeHolder="Search your Recipe"
             onChangeText={(text)=>{"321654789"}}
             >
              
             </TextInput>
             <TouchableOpacity
             style={Styles.requestButton}
             >

             </TouchableOpacity>
         </View>   
     )
  }
}
