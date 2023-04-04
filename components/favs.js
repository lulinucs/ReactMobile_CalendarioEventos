import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from './card'

const FavoriteItem = ({ id, data }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const checkFavorite = async () => {
      const favoriteData = await AsyncStorage.getItem(`@favorite_${id}`);
      console.log(favoriteData)
      setIsFavorite(favoriteData !== null);
    };
    checkFavorite();
  }, [id]);

  return <View>{isFavorite ? <View>{data}</View> : null}</View>;
};

export default FavoriteItem;

