import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
              title="Contact"
              onPress={() => this.props.navigation.navigate('Contact')}
          />
        </View>
    );
  }
}