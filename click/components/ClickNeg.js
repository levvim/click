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

class ClickNeg extends React.Component {

  handleNeg = () => {
    store.dispatch({type:"scoreNeg", payload:1})
  }

  render() {
    return(
      <View style={{
          flex:1,
          backgroundColor: '#CF6679',
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
            underlayColor:'none',
          }}
          onPress={() => this.handleNeg()}
          color='transparent'>
        <Text style={{fontSize:32,color:'white'}}>{this.props.negTotal}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default connect(mapStateToProps)(ClickNeg);
