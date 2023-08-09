import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Card, Button } from 'react-native-paper';

const CartCard = (props) => {
    const {product, onAdd, onRemove, img } = props;
    return(
        <Card style={Styles.container}>
        <Text style={Styles.titleText}>{product.item.name}</Text>
    <Card.Content>
    </Card.Content>
    <Card.Cover style={Styles.image}source={{ uri: img }} />

    <Card.Actions>
    <Text>${product.price}</Text>
    {product.quantity < product.item.sizes[product.size].quantity ?
    <View>
      <Button
      title='add'
      onPress={() => onAdd(product.item,product.size)}
      ><Text>+</Text></Button>
        <Button
        title='remove'
      onPress={() => onRemove(product.item,product.size)}
      ><Text>-</Text></Button>
      </View>
      : <View>
         <Button
        title='remove'
      onPress={() => onRemove(product.item,product.size)}
      ><Text>-</Text></Button>
      <Text>you have the maximum {product.name} available.</Text>
      </View>}
    </Card.Actions>
  </Card>
    )

}
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