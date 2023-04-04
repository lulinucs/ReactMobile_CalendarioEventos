import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  WebView,
  ScrollView,
  Platform,
  Linking,
} from 'react-native';
import Header from './components/header';
import ButtonWithIcon from './components/ButtonWithIcon';
import Infos from './components/infos';
import VideoPlayer from './videoPlayer'
export default class EventsDetails extends React.Component {
  static navigationOptions = {
    title: 'Informações do Evento',
  };

  constructor(props) {
    super(props);
    let event = props.navigation.getParam('event');
    this.state = {
      id: event.id,
      title: event.title,
      local: event.local,
      data: event.data,
      hora: event.hora,
      urlLocal: event.urlLocal,
      lat: event.lat,
      lng: event.lng,
      srcImages: event.srcImages,
      srcVideo: event.srcVideo,
      urlIg: event.urlIg,
      valorIngresso: event.valorIngresso,
      urlSite: event.urlSite,
      tel: event.tel,
      email: event.email,
      urlIngresso: event.urlIngresso
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    const {
      id,
      title,
      local,
      data,
      hora,
      urlLocal,
      lat,
      lng,
      srcImages,
      srcVideo,
      urlIg,
      valorIngresso,
      urlSite,
      tel,
      email,
      urlIngresso
    } = this.state;
    const mapUrl = Platform.select({
      ios: 'maps:',
      android: 'geo:',
    });

    return (
      <ScrollView>
        <Infos
          title={title}
          date={data}
          time={hora}
          value={valorIngresso}
          imageSource={srcImages[0]}
          id={id}
          urlIngresso={urlIngresso}
        />
        <VideoPlayer srcVideo={srcVideo} />

        <View style={styles.sections}>
          <Text style={styles.titleSection}>Galeria</Text>
          
          { srcImages[1] ? <Image
            style={styles.imagegallery}
            source={{
              uri: srcImages[1],
            }}
          /> : null}
          
          { srcImages[2] ? <Image
            style={styles.imagegallery}
            source={{
              uri: srcImages[2],
            }}
          /> : null}

          { srcImages[3] ? <Image
            style={styles.imagegallery}
            source={{
              uri: srcImages[3],
            }}
          /> : null}
          
          { srcImages[4] ? <Image
            style={styles.imagegallery}
            source={{
              uri: srcImages[4],
            }}
          /> : null}
        </View>

        <View style={styles.sections}>
          <Text style={styles.titleSection}>Informações e Contato</Text>

          <ButtonWithIcon
            title={local}
            onPress={() => Linking.openURL(`${mapUrl}0,0?q=${lat},${lng}`)}
            iconName="location"
            iconSize={24}
            color={'#DB4437'}
          />
          <ButtonWithIcon
            title={urlIg}
            onPress={() => Linking.openURL(`http://www.instagram.com/${urlIg}`)}
            iconName="logo-instagram"
            iconSize={24}
            color={'#E1306C'}
          />
          <ButtonWithIcon
            title={urlIg}
            onPress={() => Linking.openURL(`http://www.facebook.com/${urlIg}`)}
            iconName="logo-facebook"
            iconSize={24}
            color={'#3B5998'}
          />
          <ButtonWithIcon
            title={tel}
            onPress={() => Linking.openURL(`http://wa.me/${tel}`)}
            iconName="logo-whatsapp"
            iconSize={24}
            color={'#25D366'}
          />
          <ButtonWithIcon
            title={email}
            onPress={() => Linking.openURL(`mailto:${email}`)}
            iconName="mail"
            iconSize={24}
            color={'#808080'}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  sections: {
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
  imagegallery: {
    margin: 5,
    aspectRatio: 1.5,
    resizeMode: 'contain',
  },
  titleSection: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
