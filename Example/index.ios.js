/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter
} = React;

require('react-native-bluetooth-state');

var Example = React.createClass({
  getInitialState: function() {
    return {
      bluetooth: 'unknown'
    };
  },
  componentDidMount: function() {
    DeviceEventEmitter.addListener('centralManagerDidUpdateState', bluetoothState => this.setState({bluetooth: bluetoothState}));
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          What's the state of my bluetooth?
        </Text>
        <Text style={styles.instructions}>
          {this.state.bluetooth}
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Example', () => Example);
