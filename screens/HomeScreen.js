import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import MovieItem from '../components/MovieItem';

export default function HomeScreen({ navigation }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.example.com/movies');
        setMovies(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MovieItem movie={item} onPress={() => navigation.navigate('MovieDetails', { movie: item })} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});