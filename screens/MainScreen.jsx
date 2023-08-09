import React, {useState} from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, TouchableHighlight, Button } from 'react-native';



const MainScreen = ({navigation}) => {
    return (
    
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          <Text>Home Screen</Text>
   
          <Button
          title="cart" 
          onPress={() => navigation.navigate('Cart')}
          >Cart</Button>
          <Button
          title="skateboards" 
          onPress={() => navigation.navigate('Skateboards')}
          >Skateboards</Button>

          <Button
          title="pants" 
          onPress={() => navigation.navigate('Pants')}
          >Pants</Button>

          <Button
          title="shirts" 
          onPress={() => navigation.navigate('Shirts')}
          >Shirts</Button>
  
        </View>
       
      );




}


export default MainScreen;