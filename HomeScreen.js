import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react";
import {APP_NAME, API_KEY, COMPANY_EMAIL} from '@env'
import MovieScreen from "./MovieScreen";
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.title}>
          <Text style={styles.title} >Welcome to the Movie App!
          </Text>
            <Button style={styles.button}
            title="Show Movies"
                onPress={() => navigation.navigate("MovieScreen")}
                />
             </View>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: "#fff",
      justifyContent: "center",
      fontSize: 39,
    },
    item: {
      backgroundColor: "#EEE",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
      padding: 20,
      color: 'blue',
      justifyContent: "center",

    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    }
  });
