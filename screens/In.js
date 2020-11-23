import React from 'react';
import { Text, View } from 'react-native';

export default class Searchscreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{color:'purple',fontWeight:'bold',fontSize:20}}>instagram</Text>
        </View>
      );
    }
  }