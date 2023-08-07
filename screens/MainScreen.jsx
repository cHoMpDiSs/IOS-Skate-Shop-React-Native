import React, {useState} from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, TouchableHighlight, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const MainScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
          title="skateboards" 
          onPress={() => navigation.navigate('Skateboards')}
          
          >SKATEBOARDS</Button>
     
        </View>
      );




}


export default MainScreen;