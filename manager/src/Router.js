import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit'
import FlatListItem from './components/FlatListItem'

const RouterComponent = () => {

  return (
      <Router>
          <Scene key="root" hideNavBar>
              <Scene key="auth">
                  <Scene key="login" component={LoginForm} title="Please Login" initial />
              </Scene>
              <Scene key="employee">
                  <Scene
                  rightTitle="Add"
                  onRight={() => Actions.employeeCreate() }
                  key="empList"
                  component={EmployeeList}
                  title="Employees"
                  initial
                />
                <Scene key="listItem"  component={FlatListItem} title="EmployeeList" />
                <Scene key="employeeCreate"  component={EmployeeCreate} title="Add Employees" />
                <Scene key="employeeEdit"  component={EmployeeEdit} title="Modify Employees" />
            </Scene>

          </Scene>
      </Router>
  );
};

export default RouterComponent;
