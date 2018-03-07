import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import md5 from 'md5';
import PropTypes from 'prop-types';

export default function Contact({ contactName, contactEmail }) {
  return (
      <View style={styles.contactContainer}>
        <Image style={{ width: 60, height: 60 }} source={{ uri: `https://gravatar.com/avatar/${md5(contactEmail)}.png?s=200` }}/>
        <Text style={styles.name}>{contactName}</Text>
      </View>
  );
}

Contact.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactEmail: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  contactContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    padding: 5,
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