import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import Click from './components/Click';
import store from './store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


class App extends React.Component {
  render() {
  return (
      <View style={styles.container}>
        <Provider store = { store }>
          <Click />
        </Provider>
      </View>
  )};
}

export default App;
