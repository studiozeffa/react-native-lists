import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  picture: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginBottom: 10
  },
  text: {
    marginVertical: 5,
    fontSize: 18
  }
});

const Detail = ({item}) => {
  const pronounSubj = item.gender === 'male' ? 'He' : 'She';
  const pronounPoss = item.gender === 'male' ? 'His' : 'Her';
  const genderDisplay = item.gender === 'male' ? 'Male' : 'Female';

  return (
    <View style={styles.container}>
      <Image style={styles.picture} source={{uri: item.picture}} />
      <Text style={styles.text}>{item.name} is {genderDisplay}.</Text>
      <Text style={styles.text}>{pronounSubj} lives at {item.address}.</Text>
      <Text style={styles.text}>{pronounSubj} works at {item.company}.</Text>
      <Text style={styles.text}>{pronounPoss} favourite film is {item.filmName}.</Text>
    </View>
  );
};

export default Detail;
