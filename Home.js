import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import eventos from './data/eventos.js';
import Card from './components/card.js';
import ButtonWithIcon from './components/ButtonWithIcon'


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Próximos Eventos',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <ScrollView style={styles.container}>
            <FlatList
              data={eventos}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => navigate('EventsDetails', { event: item })}>
                    <Card
                      imageSource={item.srcImages[0]}
                      title={item.title}
                      date={item.data}
                    />
                </TouchableOpacity>
              )}
            />

        </ScrollView>

        <View style={styles.button}>
          <ButtonWithIcon
            title={'Favoritos'}
            onPress={() => navigate('FavsPage')}
            iconName='heart'
            iconSize={24}
            color={'#FF1493'}
          />
          <ButtonWithIcon
            title={'Sair'}
            onPress={() => BackHandler.exitApp()}
            iconName='exit'
            iconSize={24}
            color={'#FFA500'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  button: {
    padding: 15,
  },
});
