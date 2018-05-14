// import a library that help creating a component
import React from 'react';
//import ReactNative from 'react-native';  --- direct import
//lets replace above import with import destructuring
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create a component
/*
const App = () => {
  return (
    <Text>Some Text</Text>
  );
}
*/
/*if we have a single statement in the federated function,
then it can be replaced with simple statement*/
//<Text>Some Text</Text>
const App = () => (
    <View style={{ flex: 1 }}>
      <Header headerText={'Album'} />
      <AlbumList />
    </View>
);

//Render it to the device
//ReactNative.AppRegistry.registerComponent('albums', () => App);
//After import destructuring this statement can be replaced as
AppRegistry.registerComponent('albums', () => App);
