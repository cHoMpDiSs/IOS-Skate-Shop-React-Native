import React, {useState} from 'react';
import { View, StyleSheet, Text, Button, ImageBackground, TouchableHighlight } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SusVideo from './components/SusVideo';
import SkateboardScreen from './screens/SkateboardsScreen';
import PantsScreen from './screens/PantsScreen';
import ShirtsScreen from './screens/ShirtsScreen';
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
      onPress={() => navigation.navigate('home')}
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
  const [checkOutItems, setCheckOutItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (item, size) =>{
    const exist = cartItems.find(x => x.item._id === item._id && x.size === size);
      console.log(exist, "exist")
     if(exist && item.sizes[size].quantity >= 1 && exist.size === size ){
      let newArr = [...cartItems];
        for(let i = 0; i < newArr.length; i++){
          if (newArr[i].item._id === item._id && newArr[i].size === size){
            console.log("NEW ARR", newArr[i].item._id)
            console.log("PRODUCT ID", item._id)
            newArr[i].quantity ++
            console.log(newArr[i].quantity, "NEW ARRRAYYYYYY Quantity")
        }};
        setCartItems(newArr);
        console.log(cartItems + " adding more cart items.");
      }else{
        setCartItems([...cartItems, {item, size, quantity:1}]);
        console.log(cartItems+" empty cart or new item being added")

      };
  };

console.log(cartItems, "CART ITEMS")


const onRemove = (item,size) =>{
  let newCartArr = [...cartItems];
  console.log("ITEM----->",item, "size---->", size)
  for(let i = 0; i < cartItems.length; i++){
    if (cartItems[i].item._id === item._id && cartItems[i].size === size){
        newCartArr[i].quantity --;
        if(newCartArr[i].quantity === 0){
         newCartArr.splice(i,1)
        }
    }
    setCartItems(newCartArr)
}
}

const checkOut = () => {
 console.log(cartItems, "CART ITEMS IN CHECKOUT")

  
  for(let i = 0; i < cartItems.length; i++){
      const newSizes = cartItems[i].item.sizes
      let idString = cartItems[i].item._id;
      let typeString = cartItems[i].item.product;
      let size = cartItems[i].size
      newSizes[size].quantity = cartItems[i].item.sizes[size].quantity - cartItems[i].quantity 
      console.log(typeString, "TYPE STRING")
      console.log(idString, "ID STRING")
      let productSize = cartItems[i].size;
      console.log(productSize, "PRODUCT SIZE")


      
      fetch("https://susaf-b1c07c666ead.herokuapp.com/api/"+ typeString + "/" + idString , {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
          },
          method: "PATCH",	
          body: JSON.stringify({
            sizes: newSizes
          })
        })
          .then(function (response) {
          return response.json();
          })
          .then(function (data) {
          });
        
    }

    setCheckOutItems([])
    setCartItems([])
  }

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name="sus af" >
        {(props) => <HomeScreen {...props} cartItems={cartItems} onAdd={onAdd}/>}
          </Stack.Screen>
        <Stack.Screen name="home" >
        {(props) => <MainScreen {...props} cartItems={cartItems} onAdd={onAdd}/>}
        </Stack.Screen>
        <Stack.Screen name="Skateboards">
          {(props) => <SkateboardScreen {...props} cartItems={cartItems} onAdd={onAdd}/>}
          </Stack.Screen>
          <Stack.Screen name="Pants">
          {(props) => <PantsScreen {...props} cartItems={cartItems} onAdd={onAdd}/>}
          </Stack.Screen>
          <Stack.Screen name="Shirts">
          {(props) => <ShirtsScreen {...props} cartItems={cartItems} onAdd={onAdd}/>}
          </Stack.Screen>
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