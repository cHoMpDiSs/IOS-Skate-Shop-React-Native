import React, {useState} from 'react';
import { View, StyleSheet, Text, Button, ImageBackground, TouchableHighlight } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SusVideo from './components/SusVideo';
import SkateboardScreen from './screens/SkateboardsScreen';
import Main from './screens/MainScreen';
import MainScreen from './screens/MainScreen';


const image = {uri:"https://susaf.s3.us-west-1.amazonaws.com/static/la.jpeg"};
const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
        <SusVideo/>
  
        <View style={styles.buttonContainer}>
      <TouchableHighlight 
      onPress={() => navigation.navigate('Main')}
                style ={{ 
                    height: 70,
                    width:160,
                    borderRadius:10,
                    backgroundColor : "white",
                    opacity:.9,
                    marginLeft :50,
                    marginRight:50,
                    marginTop :20
                }}>
       
                  <Text style={styles.buttonText}>shop</Text>
          </TouchableHighlight> 
          </View>


    </View>
    </ImageBackground>
  )



}

const App = () => {
  const [shouldShow, setShouldShow] = useState(true);
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="sus af" component={HomeScreen}/>
        <Stack.Screen name="Main" component={MainScreen}/>
        <Stack.Screen name="Skateboards" component={SkateboardScreen}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems:'center',
    paddingTop:400,
    
    
  },
  buttonText:{
    fontWeight:'600',
    paddingTop:8,
    fontSize: 40,
    color:'black',
    textAlign: 'center',
    
 
   
  }

});


export default App;