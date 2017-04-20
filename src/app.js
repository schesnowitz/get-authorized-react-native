import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import Header  from './components/Header'
import LoginForm  from './components/LoginForm'

class App extends Component {
    componentWillMount() {
      firebase.initializeApp({
      apiKey: "AIzaSyAzgLbvw_mcV2Ri_I3uyMU5l3z7VDeMA3o",
      authDomain: "authentication-34e29.firebaseapp.com",
      databaseURL: "https://authentication-34e29.firebaseio.com",
      projectId: "authentication-34e29",
      storageBucket: "authentication-34e29.appspot.com",
      messagingSenderId: "200649221104"
    });
  }
  render() {
    return (
      <View>
        <Header headerText='This is the Header' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
