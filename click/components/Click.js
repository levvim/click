import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler'
import { StyleSheet, Text, View, Image } from 'react-native';
import ClickPos from './ClickPos';
import ClickNeg from './ClickNeg';
import ClickMaj from './ClickMaj';
import ClickReset from './ClickReset';

import {connect} from 'react-redux'
import store from "../store"

function mapStateToProps(state, ownProps) {
  return {
    posTotal: state.click.posTotal,
    negTotal: state.click.negTotal,
    majTotal: state.click.majTotal,
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretch: {
    width: 50,
    height: 50,
    resizeMode: 'center'
  },
});


class Click extends React.Component {
  render() {
    return(
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#121212',
      }}>
        <View style={{
          flex: 3,
        }}> 
          <ClickNeg />
        </View>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'stretch',
        }}>
          <View style={{
            flex: 1,
        }}> 
          <ClickMaj />
        </View>
          <View style={{
            flex: 4,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#121212',
          }} >
            <Image
              style={styles.stretch}
              source={require('../assets/scaleslogo.png')}
            />
          </View>
          <View style={{
            flex: 1,
          }}> 
            <ClickReset />
          </View>
        </View>
        <View style={{
          flex: 3,
        }}> 
            <ClickPos />
        </View>
      </View>
    )
  }
}


export default connect(mapStateToProps)(Click);
