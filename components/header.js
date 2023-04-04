import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = ({ imageSource }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: imageSource,
        }}
        style={styles.image}
      />

      <View style={styles.overlay} />
      <View style={styles.header}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 150,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});

export default Header;
