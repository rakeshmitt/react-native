import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
  }

  componentWillMount() {
    console.log(this.props.employeeForm);
  }


  render(){
      return (
      <Card>
          <EmployeeForm {...this.props} />

          <CardSection>
                <Button onPress={this.onButtonPress.bind(this)}>
                    Create
                </Button>
          </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const { name, phone, shift } = state.employeeForm;

  return {
    name: name,
    phone: phone,
    shift: shift
  };

};

export default connect(mapStateToProps, {
    employeeUpdate, employeeCreate })(EmployeeCreate);
