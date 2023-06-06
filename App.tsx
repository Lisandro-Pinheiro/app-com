import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from './src/components/title-components';
import ImageComponent from './src/components/img-component';
import Button from './src/components/button-component';


interface AppState {
  imageIndex: number;
}

class App extends React.Component<{}, AppState> {
  images: string[];

  constructor(props: {}) {
    super(props);
    this.state = {
      imageIndex: 0,
    };
    this.images = [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ5xnzB-t8dgORupgOAo79EzvoA9aGmDAbIqAzMSiytw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCK6QwSRp69QqvP039qS7uO1_jSYh1J3dwbQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLGMRfVrxssWRszOrzI3UY0hpKEaxDRoKhsQ&usqp=CAU',
    ];
  }

  handleButtonClick = () => {
    this.setState((prevState) => ({
      imageIndex: (prevState.imageIndex + 1) % this.images.length,
    }));
  };

  render() {
    const { imageIndex } = this.state;
    const currentImage = this.images[imageIndex];

    return (
      <View style={styles.container}>
        <Title text="Meu Aplicativo" />
        <ImageComponent imageUrl={currentImage} />
        <Button
          onPress={this.handleButtonClick}
          buttonText="Trocar Imagem"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
