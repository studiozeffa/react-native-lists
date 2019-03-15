import React, { Component } from 'react';

import contacts from '../resources/contacts.json';
import List from '../components/List';

class ListScreen extends Component {
  static navigationOptions = {
    title: 'Contacts'
  };

  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress(item) {
    this.props.navigation.navigate('Detail', {item})
  }

  render() {
    return <List items={contacts} onPress={this.onPress} />
  }
}

export default ListScreen;
