import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayourAnimation,
  NativeModules
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { CardSection } from './common';

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental
    && UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {

  componentWillUpdate() {
      //LayourAnimation.Spring();
  }

  renderDescription() {
  //  console.log(this.props);
  /*  if(this.props.library.id === this.props.selectedLibraryId) {
      return (
        <Text> {this.props.library.description} </Text>
      );
    }*/
    const { library, showDescription } = this.props;
    if(showDescription){
      return (
        <CardSection>
          <Text style= {{ flex: 1 }}> {this.props.library.description} </Text>
        </CardSection>
      );
    }
  }

  render(){
    const { titleStyle } = Styles;
    const { id, title } = this.props.library;

    return(
      <TouchableWithoutFeedback
      onPress = { () => this.props.selectLibrary(id) }
      >
      <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const Styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }};

const mapStateToProps = (state, ownProps) => {
  const showDescription = ownProps.library.id === state.selectedLibraryId;
  //  return { selectedLibraryId: state.selectedLibraryId };
  return { showDescription }
}

export default connect(mapStateToProps,actions)(ListItem);
