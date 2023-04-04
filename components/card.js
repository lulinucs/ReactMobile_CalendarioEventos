import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const Card = ({ imageSource, title, date }) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: imageSource,
        }}
        style={styles.cardImage}
      />
      <View style={styles.cardDetailsContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDate}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  cardDetailsContainer: {
    flex: 1,
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDate: {
    fontSize: 14,
    color: '#6B7280',
  },
});

export default Card;
