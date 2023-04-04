import React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import FavButton from './favButton'
import ButtonWithIcon from './ButtonWithIcon'

const Infos = ({ title, date, time, value, imageSource, id, urlIngresso}) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <FavButton id={id}/>
      </View>
      
      <Image
        source={{
          uri: imageSource,
        }}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <Icon style={styles.details} name="calendar" color="#000" />
        <Text style={styles.details}>{date}</Text>
        <Icon style={styles.details} name="time" color="#000" />
        <Text style={styles.details}>{time}</Text>
        <Icon style={styles.details} name="pricetag" color="#000" />
        <Text style={styles.details}>{value}</Text>
      </View>
      {urlIngresso ? 
      <View style={styles.button}>
          <ButtonWithIcon
            title={'Comprar Ingresso'}
            onPress={() => Linking.openURL(urlIngresso)}
            iconName='pricetag'
            iconSize={24}
            color={'#388E3C'}
          />
        </View> : <View style={styles.notButton}><Text style={styles.textTicket}>Entrada colaborativa</Text></View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  details: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#808080',
  },
  image: {
    marginBottom: 10,
    width: '100%',
    height: 146,
    resizeMode: 'contain',
  },
    button: {
    paddingTop: 10,
  },
    textTicket: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: "Roboto",
  },
  notButton: {
    backgroundColor: '#00BFFF',
    borderRadius: 5,
    padding: 10,
    margin: 5,
    maginTop: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
  }
});

export default Infos;
