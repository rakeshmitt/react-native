// Import library for making a registerComponent
import React from 'react';
import { Text, View } from 'react-native';

//make a registerComponent
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    //<Text style={textStyle}>Album!</Text>
    //replacing hardcoding with variable
      <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
      </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

//Make the component  available to other parts of the app
export {Header};
