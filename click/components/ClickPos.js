import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
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
      <View style={{
          flex:1,
          backgroundColor: '#03DAC6',
          borderColor: '#121212',
          alignItems: 'stretch',
          justifyContent: 'center',
          borderWidth: 20,
      }}>
        <TouchableHighlight
          style={{ 
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => this.handlePos()}
          color='transparent'>
        <Text style={{fontSize:32,color:'white'}}>{this.props.posTotal}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default connect(mapStateToProps)(ClickPos);
