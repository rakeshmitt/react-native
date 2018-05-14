import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducer';
import LoginForm from './components/LoginForm'
import Router from './Router';

class App extends Component {

  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyDoE2FDic8Z5VmwRchqHna0Jj8W953z3YU',
      authDomain: 'manager-a17a9.firebaseapp.com',
      databaseURL: 'https://manager-a17a9.firebaseio.com',
      projectId: 'manager-a17a9',
      storageBucket: 'manager-a17a9.appspot.com',
      messagingSenderId: '234501009206'
    };
    firebase.initializeApp(config);
 }

  render() {
    const store = createStore(reducers, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
