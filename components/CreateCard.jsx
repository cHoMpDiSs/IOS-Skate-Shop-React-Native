import React, {useState, useEffect} from "react";
import { Text ,View, StyleSheet } from 'react-native';
import {Card, Button } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';



const CreateCard = (props) => {

    const {cartItems, name, img, product, price} = props;
    const [sizeSelector, setSelector] = useState("small");

    
    const cartQty = (productId,size) =>{
        let cartItemsQty = 0;
        for (let i = 0; i < cartItems.length; i++){
            if ( productId === cartItems[i].item._id && size === cartItems[i].size ){
                cartItemsQty = cartItemsQty + cartItems[i].quantity;
                console.log(name, "in cart", cartItemsQty);
            }
        } return(cartItemsQty);
    }
    

    const handleAddToCart = (productProps) => {
        console.log("PRODUCT in handle add to cart", productProps)
        props.onAdd(productProps, sizeSelector);
        
    };
    
    
    let cartAmount = 0;
    let stockAmount = 0;
    stockAmount = product.sizes[sizeSelector].quantity
    cartAmount = cartQty(product._id,sizeSelector);
    
    return(
         
        <Card style={Styles.container}>
            <Text style={Styles.titleText}>{name}</Text>
        <Card.Content>
        </Card.Content>
        <Card.Cover style={Styles.image}source={{ uri: img }} />
       <Card.Content>
        <View style={Styles.pickerContainer}>
        <Picker
        selectedValue={sizeSelector}
        onValueChange={(itemValue, itemIndex) =>
            setSelector(itemValue)
        }>
            <Picker.Item label={"small"} value={"small"} />
            <Picker.Item label={"medium"} value={"medium"} />
            <Picker.Item label={"large"} value={"large"} />
        </Picker>
        </View>
        </Card.Content>
        <Card.Actions>
        <Text>${props.price}</Text>
          <Button
          style={Styles.btnText}
          onPress={() => handleAddToCart(product)}
          >Add to cart</Button>
        </Card.Actions>
      </Card>
         
    )
}

  
const Styles = StyleSheet.create({
    container :{
        backgroundColor:'white',
        alignItems: 'center',
        textAlign:'center',
        flex: 1,
        paddingTop:10,
        paddingBottom:10,
        margin:37,
        
    },
    btnText:{
        backgroundColor:'black'
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
    pickerContainer:{
        paddingTop:0
    }
})

export default CreateCard;