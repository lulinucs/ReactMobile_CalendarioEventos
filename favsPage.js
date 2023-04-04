import * as React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import FavoriteItem from './components/favs';
import eventos from './data/eventos';
import Card from './components/card';

export default class FavsPage extends React.Component {
  static navigationOptions = {
    title: 'Favoritos',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          data={eventos}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigate('EventsDetails', { event: item })}>
              <FavoriteItem
                id={item.id}
                data={
                  <Card
                    imageSource={item.srcImages[0]}
                    title={item.title}
                    date={item.data}
                  />
                }
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
