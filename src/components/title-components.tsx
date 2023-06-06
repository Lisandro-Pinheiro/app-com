import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface TitleProps {
  text: string;
}

class Title extends React.Component<TitleProps> {
  render() {
    const { text } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Title;
