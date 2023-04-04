import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

const ButtonWithIcon = ({ title, onPress, iconName, iconSize, color }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center',
        backgroundColor: color,
        borderRadius: 8,
        height: 38,
        paddingHorizontal: 16,
      }}>
      <Icon
        style={styles.iconContainer}
        name={iconName}
        size={iconSize}
        color="#fff"
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginRight: 'auto',
  },
  title: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 'auto',
  },
});

export default ButtonWithIcon;
