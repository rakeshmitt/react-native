import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeList } from '../actions';
import FlatListItem from './FlatListItem';


class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeeList();
  }

  renderItem = ({item}) => (
    <FlatListItem employee={item} />
  );

  render(){
    //renderItem={({item}) => <Text>{item.name}</Text>}
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderItem}
        keyExtractor={item => item.uid}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return ({ ...val, uid });
  });
  return { employees };
};

export default connect(mapStateToProps, {employeeList})(EmployeeList);
