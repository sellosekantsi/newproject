import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function MovieItem({ movie, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: movie.poster }} style={styles.poster} />
      <View style={styles.details}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.rating}>Rating: {movie.rating}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginVertical: 5,
  },
  poster: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    color: '#888',
  },
});