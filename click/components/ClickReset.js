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

class ClickReset extends React.Component {

  handleReset = () => {
    store.dispatch({type:"scoreReset", payload:1})
  }

  render() {
    return(
      <View style={{
          flex:1,
          backgroundColor: '#121212',
          borderWidth: 5,
          borderColor: '#121212',
          alignItems: 'stretch',
          justifyContent: 'center',
          borderWidth: 5,
      }}>
        <TouchableHighlight
          style={{ 
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            underlayColor:'#121212'
          }}
          onPress={() => this.handleReset()}
          color='transparent'>
        <Text style={{fontSize:16,color:'white'}}>reset</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default connect(mapStateToProps)(ClickReset);
