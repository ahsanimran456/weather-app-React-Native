import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import Navigations from './Navgigations/Navigation';
function App() {
  return (
    <Provider store={Store}>
      <Navigations />
    </Provider>
  );
}

const styles = StyleSheet.create({

});

export default App;
