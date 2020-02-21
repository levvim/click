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

class ClickNeg extends React.Component {

  handleNeg = () => {
    store.dispatch({type:"scoreNeg", payload:1})
  }

  render() {
    return(
      <View>
        <Button
          onPress={() => this.handleNeg()}
          title={ `${this.props.negTotal}` }
          color='transparent'
        />
      </View>
    )
  }
}

export default connect(mapStateToProps)(ClickNeg);
