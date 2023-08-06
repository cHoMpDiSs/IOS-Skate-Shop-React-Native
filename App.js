import React, {useState} from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, TouchableHighlight } from 'react-native';

import SusVideo from './components/SusVideo';


const enterShop = () => {
  console.log("button clicked")
}

const image = {uri:"https://susaf.s3.us-west-1.amazonaws.com/static/la.jpeg"};





const App = () => {
  const [shouldShow, setShouldShow] = useState(true);
  return (
  <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
        <SusVideo/>
      <View style={styles.buttonContainer}>
      <TouchableHighlight onPress={enterShop}
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