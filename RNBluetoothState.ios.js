/**
 * @providesModule RNBluetoothState
 * @flow
 */
'use strict';

import { DeviceEventEmitter, NativeModules } from 'react-native';
const { RNBluetoothState } = NativeModules;

let subscribers = [];

DeviceEventEmitter.addListener('centralManagerDidUpdateState', (...args) => {
  subscribers.forEach(subscriber => {
    subscriber.apply(this, args);
  });
});

const BluetoothState = {
  initialize() {
    RNBluetoothState.initialize();
  },
  subscribe(callback) {
    subscribers.push(callback);
  },
  unsubscribe(callback) {
    subscribers = subscribers.filter(fn => callback !== fn);
  },
  clear() {
    subscribers = [];
  }
};

export default BluetoothState;
