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
    resizeMode: 'stretch'
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
        padding: 20,
        backgroundColor: '#121212',
      }}>
        <View style={{
          flex: 3,
          flexDirection: 'column',
          alignSelf: 'stretch',
          alignItems: 'stretch',
          justifyContent: 'center',
          backgroundColor: '#CF6679',
        }}> 
          <ClickNeg />
        </View>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'stretch',
          marginHorizontal: 0,
          marginVertical: 0,
        }}>
          <View style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#121212',
        }}> 
          <ClickMaj />
        </View>
          <View style={{
            flex: 1,
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
            alignItems: 'center',
            backgroundColor: '#121212',
          }}> 
            <ClickReset />
          </View>
        </View>
        <View style={{
          flex: 3,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#03DAC6',
        }}>
            <ClickPos />
        </View>
      </View>
    )
  }
}


export default connect(mapStateToProps)(Click);
