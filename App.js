import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

export default App;
