import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm'


export default class App extends Component {

  state = { loggedIn: null};

  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyBh658jEnCM_4fB48sgsdZ5z9E7ixdWt5M",
    authDomain: "authentication-16bf6.firebaseapp.com",
    databaseURL: "https://authentication-16bf6.firebaseio.com",
    projectId: "authentication-16bf6",
    storageBucket: "authentication-16bf6.appspot.com",
    messagingSenderId: "703684594220"
  });

  firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
  });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
            <Card>
                <CardSection>
                      <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                </CardSection>
              </Card>
            );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}
