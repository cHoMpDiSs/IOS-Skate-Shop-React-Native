import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Card, Button } from 'react-native-paper';


const CartCard = (props) => {
    const {product, onAdd, onRemove, img } = props;
    return(
        <Card style={Styles.container}>
        <Text style={Styles.titleText}>{product.item.name}</Text>
    <Card.Content>
    
    <Card.Cover style={Styles.image}source={{ uri: img }} />
    </Card.Content>
 
    {product.quantity < product.item.sizes[product.size].quantity ?
    
  
      <View style={Styles.buttonContainer}>

       
      <Card.Actions>
      <Button
      title='add'
      onPress={() => onAdd(product.item,product.size)}
      >+</Button>
      </Card.Actions>
      
        <Card.Actions>
        <Button
        title='remove'
      onPress={() => onRemove(product.item,product.size)}
      >-</Button></Card.Actions>
      
       
      </View>
      : 
         <View style={Styles.buttonContainer}>
          <Card.Actions>
         <Button
        title='remove'
      onPress={() => onRemove(product.item,product.size)}
      >-</Button>
      </Card.Actions>

      <Text>you have the maximum {product.name} available.</Text>
      </View>
      
}
    
  
   <Text>{product.quantity} X ${product.item.price}</Text>
   
  </Card>
)}


const Styles = StyleSheet.create({
    container :{
        backgroundColor:'white',
        alignItems: 'center',
        textAlign:'center',
        flex:1,
        
        paddingTop:10,
        paddingBottom:10,
        margin:37,        
    },
    buttonContainer:{
      flexDirection:'row',
      paddingLeft:25
     
    },


    cardButtons:{
      
      alignItems:'center',
      backgroundColor:'black',
      alignContent: 'center',
      borderRadius:5,
      marginRight:2,
      width:35,
      height:35,
      borderWidth:1,
      borderColor:'black'
    },

    buttonText:{
      fontSize:20,
      textAlign:'center',
      color:'white'
    },
    titleText:{
        textAlign:'center',
        paddingBottom:6
    },
    image:{
        alignSelf:'center',
        width:200,
        height:210
    },

})

export default CartCard;