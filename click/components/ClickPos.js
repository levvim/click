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

class ClickPos extends React.Component {

  handlePos = () => {
    store.dispatch({type:"scorePos", payload:1})
  }

  render() {
    return(
      <View>
        <Button
          style={{ borderRadius:100 }}
          onPress={() => this.handlePos()}
          title={ `${this.props.posTotal}` }
          color='transparent'
        />
      </View>
    )
  }
}

export default connect(mapStateToProps)(ClickPos);
