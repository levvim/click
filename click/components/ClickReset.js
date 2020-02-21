import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler'
import { StyleSheet, Text, View, Button } from 'react-native';
import {connect} from 'react-redux'
import store from "../store"

function mapStateToProps(state, ownProps) {
  return {
    posTotal: state.click.posTotal,
    negTotal: state.click.negTotal,
    majTotal: state.click.majTotal,
  };
}

store.subscribe(() => {
    store.getState()
});

class ClickReset extends React.Component {

  handleReset = () => {
    store.dispatch({type:"scoreReset", payload:1})
  }

  render() {
    return(
      <View>
        <Button
          onPress={() => this.handleReset()}
          title='reset'
          color='transparent'
        />
      </View>
    )
  }
}

export default connect(mapStateToProps)(ClickReset);
