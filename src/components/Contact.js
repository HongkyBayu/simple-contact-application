import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Contact({ contactName, contactEmail , imageURL}) {
  return (
      <View style={styles.contactContainer}>
        <Image style={{ width: 60, height: 60 }} source={{ uri: imageURL }}/>
        <Text style={styles.name}>{contactName}</Text>
        <Text style={styles.email}>{contactEmail}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  contactContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    borderWidth: 0.5,
  },
  name: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  email: {
    fontSize: 10,
    padding: 5,
    height: 30,
  },
});