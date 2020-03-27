/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import LoginScreen from './src/LoginScreen';


const App = () => {
  return (
    <View style={{flex: 1}}>
      <LoginScreen/>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
