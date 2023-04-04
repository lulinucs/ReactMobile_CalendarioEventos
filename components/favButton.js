import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

const FavButton = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchIsFavorite = async () => {
      try {
        const value = await AsyncStorage.getItem(`@favorite_${id}`);
        if (value !== null) {
          setIsFavorite(true);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchIsFavorite();
  }, []);

  const handleFavoritePress = async () => {
    try {
      setIsFavorite(!isFavorite);
      if (isFavorite) {
        await AsyncStorage.removeItem(`@favorite_${id}`);
      } else {
        await AsyncStorage.setItem(`@favorite_${id}`, 'true');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TouchableOpacity onPress={handleFavoritePress}>
      <Icon name={isFavorite ? 'heart' : 'heart-o'} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
    color: 'red',
  },
});

export default FavButton;
