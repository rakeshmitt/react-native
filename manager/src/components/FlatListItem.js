import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class FlatListItem extends Component {

  GetEmployeeDetails(){
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render () {
    const { name, uid } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.GetEmployeeDetails.bind(this)}>
        <View>
            <CardSection>
            <Text>
             {name}
            </Text>
            </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default FlatListItem;
