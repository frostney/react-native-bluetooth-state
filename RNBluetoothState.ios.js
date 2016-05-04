/**
 * @providesModule RNBluetoothState
 * @flow
 */
'use strict';

import { DeviceEventEmitter, NativeModules } from 'react-native';
const { RNBluetoothState } = NativeModules;

const BluetoothState = {
  initialize() {
    RNBluetoothState.initialize();
  },
  subscribe(callback) {
    DeviceEventEmitter
      .addListener('centralManagerDidUpdateState', callback);
  }
};

export default BluetoothState;
