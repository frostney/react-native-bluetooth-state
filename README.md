# react-native-bluetooth-state
Answering the question of "Is my bluetooth on?" in React Native

This module only works for iOS at the moment.

## Installation

```
$ npm install react-native-bluetooth-state
```

React Native >=0.7.0 is needed.

You then need to add the Objective-C part to your XCode project. Drag `RNBluetoothState.xcodeproj` from the `node_modules/react-native-bluetooth-state` folder into your XCode project. Click on the your project in XCode, goto Build Phases then Link Binary With Libraries and add `libRNBluetoothState.a` and `CoreBluetooth.framework`.

(Alternatively you can use RNPM to link the library, but in any case you need to link against `CoreBluetooth.framework`.)

## Usage

```javascript
import BluetoothState from 'react-native-bluetooth-state';

BluetoothState.subscribe(bluetoothState => {
  // bluetoothState can either be "on", "off", "unknown", "unauthorized", "resetting" or "unsupported‚"
});

// Initialize needs to be called otherwise we don't get the initial state
BluetoothState.initialize();
```

## License
Unlicense or MIT. Whatever fits your purpose best.
