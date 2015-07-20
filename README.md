# react-native-bluetooth-state
Answering the question of "Is my bluetooth on?" in React Native

## Installation

Install using npm with npm install --save react-native-bluetooth-state. React Native >=0.7.0 is needed.

You then need to add the Objective C part to your XCode project. Drag `RNBluetoothState.xcodeproj` from the `node_modules/react-native-bluetooth-state` folder into your XCode project. Click on the your project in XCode, goto Build Phases then Link Binary With Libraries and add `libRNBluetoothState.a` and `CoreBluetooth.framework`.

NOTE: Make sure you don't have the RNBeacon project open separately in XCode otherwise it won't work.

## Usage

```javascript
var React = require('react-native');
var {DeviceEventEmitter} = React;

require('react-native-bluetooth-state');

// Listen for bluetooth change
var subscription = DeviceEventEmitter.addListener('centralManagerDidUpdateState', bluetoothState => {
  // bluetoothState can either be "on", "off", "unknown", "unauthorized", "resetting" or "unsupported‚"
});
```

## License
Unlicense or MIT. Whatever fits your purpose best.