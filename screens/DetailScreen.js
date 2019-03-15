import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Detail from '../components/Detail';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class DetailScreen extends Component {
  render() {
    const item = this.props.navigation.getParam('item');
    return (
      <Detail item={item} />
    );
  }
}

DetailScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('item').name
});

export default DetailScreen;
