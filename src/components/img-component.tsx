import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

interface ImageProps {
  imageUrl: string;
}

class ImageComponent extends React.Component<ImageProps> {
  render() {
    const { imageUrl } = this.props;
    return (
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default ImageComponent;
