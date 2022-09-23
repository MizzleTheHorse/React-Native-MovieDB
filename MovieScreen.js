import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react";
import {APP_NAME, API_KEY, COMPANY_EMAIL} from '@env'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function MovieScreen({ navigation }) {
    // A state holding all the movie data.
    const [data, setData] = useState([]);
  
    // Fetch movie list when component is mounted
    useEffect(() => {
      console.log(process.env);
      fetchMovies();
    }, []);
  
    // Function to fetch movie list
    function fetchMovies() {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => setData(data.results));
    }
  
    // Render function that returns the Item component
    const renderItem = ({ item }) => (
      <Item navigation={navigation} movieId={item.id} title={item.title} release={item.release_date}/>
    );
  
    // returns a flatlist because we only need to render what the user can see.
    // Else it would be too heavy when we load alot of movies.
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
}

const Item = ({ navigation, title, release, movieId }) => (
    <View style={styles.item}>
      <Text 
      onPress={() =>
        navigation.navigate("DetailScreen", {
          movieId,
        })
      }
      style={styles.title} >
        {title}
      </Text>
      <Text style={styles.date }>
        Release date: {release}
      </Text>
    </View>
  );


const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    color: 'blue',
},
item: {
    backgroundColor: "lightgrey",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color: 'blue',

},
title: {
    fontSize: 32,
    color: 'dark',
},
release: {
    fontSize: 20,
    color: 'black',
},
});
