import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ResizeMode } from 'expo-av';
import VideoPlayer from 'expo-video-player';

const Video = ({ srcVideo, title }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.container}>
      <Text style={styles.cardTitle}>Vídeo</Text>
      <VideoPlayer
        style={styles.video}
        videoProps={{
          shouldPlay: true,
          resizeMode: ResizeMode.COVER,
          source: { uri: srcVideo },
        }}
      />
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
  video: {
    width: '100%',
    height: 200,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default Video;
