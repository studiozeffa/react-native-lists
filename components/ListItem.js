import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  name: {
    fontSize: 18
  }
});

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const { item, onPress } = this.props;
    onPress(item);
  }

  render() {
    const { item } = this.props;
    return (
      <TouchableHighlight
        style={styles.container}
        underlayColor="#e4e4e4"
        onPress={this.onPress}>
        <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
      </TouchableHighlight>
    );
  }
}

export default ListItem;
