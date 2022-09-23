import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {API_KEY} from '@env'


export default function DetailScreen({ route }) {

  // State holding movie data.
  const [data, setData] = useState({});
  console.log("Reached detailscreen")

  // Get movieID from navigate function
  const { movieId } = route.params;

  // When this component is mounted then fire the getDetails function
  useEffect(() => {
    getDetails();
  }, []);

  // Function to fetch details about the movie
  
  function getDetails() {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }
  console.log('executed fetch statement here')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <Text>{data.overview}</Text>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/original${data.poster_path}`,
        }}
      />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color: 'blue',
},
  title: {
    fontSize: 28,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "300px",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});