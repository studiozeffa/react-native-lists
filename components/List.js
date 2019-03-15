import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';
import ListSeparator from './ListSeparator';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class List extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  keyExtractor(item) {
    return item.id;
  }

  renderSeparator() {
    return <ListSeparator />;
  }

  renderItem({item}) {
    const { onPress } = this.props;
    return <ListItem item={item} onPress={onPress} />
  }

  render() {
    const { items } = this.props;
    return (
      <FlatList
        style={styles.container}
        data={items}
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.renderSeparator}
        keyExtractor={this.keyExtractor} />
    )
  }
}

export default List;
