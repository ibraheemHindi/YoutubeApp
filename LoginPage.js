
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase'

const background = require("./background.jpg")
const person = require("./person.png")
const lock = require("./lock.png")

export default class LoginPage extends Component {

  constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: ''
      }
  }

  componentWillMount(){

      var firebaseConfig = {
          apiKey: 'AIzaSyCIpf6-FsMg_z3wVpAO-0FHVFca0NdHwRU',
          authDomain: 'myyoutubeapp-af531.firebaseapp.com',
          databaseURL: 'https://myyoutubeapp-af531.firebaseio.com',
          projectId: 'myyoutubeapp-af531',
          storageBucket: 'myyoutubeapp-af531.appspot.com',
          messagingSenderId: '1020242685858'
      };

      var myApp = firebase.initializeApp(firebaseConfig);
      module.exports.myApp = myApp.database();

  }

  goToSearchPage(){

    if(this.state.email == '' || this.state.password == ''){
      Alert.alert(
        'Error',
        'Please fill both fields',
        [{text: 'OK'}],
        { cancelable: true }
      )
    }
    else{
      const {email , password} = this.state;

      firebase.auth().signInWithEmailAndPassword(email , password)
      .then( () => {
        this.setState({email : '' , password : ''});
        Actions.SearchPage();
      })
      .catch( () => {
          firebase.auth().createUserWithEmailAndPassword(email , password)
          .then( () => {
            this.setState({email : '' , password : ''});
            Actions.SearchPage();
          })
          .catch( () => {
              Alert.alert(
                'Error',
                'Authentication failed',
                [{text: 'OK'}],
                { cancelable: true }
              )
          });
      });

    }

  }

  render() {

    return (
      <Image
            style={[styles.background, styles.container]}
            source={background}
            resizeMode={"cover"}>

            <View style={styles.container} />

            <View style={styles.wrapper}>

               <View style={styles.inputWrap}>

                  <View style={styles.iconWrap}>
                    <Image
                      source={person}
                      style={styles.icon}
                      resizeMode="contain"
                    />
                  </View>

                  <TextInput
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={currentEmail => this.setState({email: currentEmail})}
                    style={styles.input}
                    underlineColorAndroid={"transparent"}
                  />

               </View>

               <View style={styles.inputWrap}>

                 <View style={styles.iconWrap}>
                   <Image
                     source={lock}
                     style={styles.icon}
                     resizeMode="contain"
                   />
                 </View>

                 <TextInput
                   placeholder="Password"
                   value={this.state.password}
                   onChangeText={currentPass => this.setState({password: currentPass})}
                   secureTextEntry
                   style={styles.input}
                   underlineColorAndroid={"transparent"}
                 />

               </View>

               <TouchableOpacity activeOpacity={0.5} onPress={this.goToSearchPage.bind(this)}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Sign In / Up</Text>
                  </View>
               </TouchableOpacity>

            </View>

            <View style={styles.container} />

      </Image>
    )
  }

}


const styles = StyleSheet.create({

	container: {
		flex: 1
	},

	background: {
		width: null ,
		height: null
	},

  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    backgroundColor: "transparent"
  },

  input: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#FFF"
  },

  wrapper: {
    paddingHorizontal: 15
  },

  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#808080"
  },

  icon: {
    height: 20,
    width: 20
  },

  button: {
    backgroundColor: "#808080",
    paddingVertical: 15,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center"
  },

  buttonText: {
    color:"#FFF",
    fontSize: 18
  }

});
